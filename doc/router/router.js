//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//css
import 'framework/scss/normalize.scss';
import 'framework/scss/reset.scss';
import 'framework/scss/theme.scss'
//component
import Home from 'doc/home';


class Index extends React.Component{
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

class Comment extends React.Component{
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/doc" component={Index}>
                    <IndexRoute component={Home}/>
                    <Route path="home" component={Home}/>
                </Route>
            </Router>
        );
    }
};

ReactDOM.render(
    <Comment/>,
    document.getElementById('content')
);