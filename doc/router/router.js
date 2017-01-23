//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
//css
import 'framework/scss/normalize.scss';
import 'framework/scss/reset.scss';
import 'framework/scss/theme.scss'
//component
import Home from 'doc/home';
import FormComponent from 'doc/form/formComponent';
import DialogComponent from 'doc/dialog/dialogComponent';
import ScrollComponent from 'doc/scroll/scrollComponent';
import TestComponent from 'doc/test/testComponent';
import ListComponent from 'doc/list/listComponent';


class Index extends React.Component{
    render() {
        // console.log('cur router',this.context.router.getCurrentRoutes());
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
                    <Route path="form" component={FormComponent}/>
                    <Route path="dialog" component={DialogComponent}/>
                    <Route path="iscroll" component={ScrollComponent}/>
                    <Route path="test" component={TestComponent}/>
                    <Route path="list" component={ListComponent}/>
                </Route>
            </Router>
        );
    }
};

ReactDOM.render(
    <Comment/>,
    document.getElementById('content')
);