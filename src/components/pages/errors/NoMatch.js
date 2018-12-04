/* @flow */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet } from 'aphrodite-jss';

const STYLES = StyleSheet.create({});

function NoMatch(appProps: {}): React.Node {
    return (
        <div className="HomePage">
            <h1>Mauvais direction</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default NoMatch;
