//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//css
import 'framework/scss/normalize.scss';
import 'framework/scss/reset.scss';
import 'framework/scss/theme.scss';

//home
import HomeComponent from 'app/m_statistical/HomeComponent';

class Index extends React.Component{
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

class Home extends React.Component{
    render() {
        return (
            <div>
                <h1>React seed</h1>
            </div>
        );
    }
}

class Comment extends React.Component{
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Index}>
                    <IndexRoute component={HomeComponent}/>
                </Route>
            </Router>
        );
    }
};

ReactDOM.render(
    <Comment/>,
    document.getElementById('content')
);