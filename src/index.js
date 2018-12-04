/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import momentConf from './moment-conf';
import './index.css';
import App from './App';
import { HomePage, Login, Logout } from './components/pages/website';
import NoMatch from './components/pages/errors/NoMatch';
import * as serviceWorker from './serviceWorker';

// Setup moment in FR
momentConf();

const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />

            {/* To remove when auth will be setup */}
            <Route exact path="/" component={App} />

            {/* No match route */}
            <Route component={NoMatch} />
        </Switch>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
