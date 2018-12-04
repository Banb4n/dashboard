/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import homePattern from '../../../assets/imgs/home.svg';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${homePattern})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function HomePage(appProps: {}): React.Node {
    return (
        <div className={css(STYLES.container)}>
            <h1>HomePage</h1>
        </div>
    );
}

export default HomePage;
