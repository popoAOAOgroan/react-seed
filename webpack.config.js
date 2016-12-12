var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');//debug
var CleanWebpackPlugin = require('clean-webpack-plugin');
 
var plugins;
var env = process.env.WEBPACK_ENV;
var outPutFile,entry;

if(env === 'product'){
    console.log('------build env------');
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "名医主刀移动版",
            template: path.resolve(__dirname, 'templates/index.ejs'),
            inject: 'body',
            chunks: ['index']
        }),
        new UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ];
    outPutFile = '[name].bundle.min.js';
    entry = {
        'index': './app/index.js'
    };
}else{
    console.log('------dev env------');
    plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "名医主刀移动版",
            template: path.resolve(__dirname, 'templates/index.ejs'),
            inject: 'body',
            chunks: ['index'],
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            title: "名医主刀移动版_React_doc",
            template: path.resolve(__dirname, 'templates/doc.ejs'),
            inject: 'body',
            chunks: ['doc/index'],
            filename: './doc/index.html'
        })
    ];
    outPutFile = '[name].bundle.js';
    entry = {
        'index': './app/indexDev.js',
        'doc/index': './doc/doc.js'
    };
}


var config = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outPutFile
    },
    module: {
        loaders:[
            {
                test: /\.scss/,
                loaders: ['style','css', 'sass'],
                include: [
                    path.resolve(__dirname, 'app'),
                    path.resolve(__dirname, 'framework'),
                    path.resolve(__dirname, 'component'),
                    path.resolve(__dirname, 'doc')
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-class-properties"]
                }
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=8192&name=./[hash].[ext]"
            }
        ]
    },
    plugins: plugins,
    watch: true
};
module.exports = config;