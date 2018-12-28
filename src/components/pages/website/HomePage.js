/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import homePattern from '../../../assets/imgs/home.svg';

import { View, NavBar } from '../../styleguide';
import { colors, spacing } from '../../styleguide/css';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${homePattern})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navbar: {
        width: '100%',
        height: '60px',
        background: colors.darkBlueGreen,
        position: 'fixed',
        boxShadow: '.5px 1px 3px rgba(0, 0, 0, .8)',
        display: 'flex',
        alignItems: 'center',
        padding: spacing.S100
    }
});

function HomePage(appProps: {}): React.Node {
    return (
        <View>
            <NavBar />
            <View styles={[STYLES.container]}>
                <h1>HomePage</h1>
            </View>
        </View>
    );
}

export default HomePage;
