/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import momentConf from './moment-conf';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Backend from './backend/Backend';

// Setup moment in FR
momentConf();

// Initialze firebase
const backend = new Backend();

ReactDOM.render(<App backend={backend} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
