/* @flow */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite-jss';
import homePattern from '../../../assets/imgs/home.svg';

import { View } from '../../styleguide';
import { colors, spacing } from '../../styleguide/css';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${homePattern})`,
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
    },
    title: {
        flex: 2,
        display: 'flex',
        color: colors.green
    },
    links: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    link: {
        margin: `0 ${spacing.S200}px`,
        fontFamily: 'Open Sans',
        textDecoration: 'none',
        color: colors.pale,
        transition: 'color 200ms',
        '&:hover': {
            color: colors.green
        }
    }
});

function HomePage(appProps: {}): React.Node {
    return (
        <View>
            <View styles={[STYLES.navbar]}>
                <View styles={[STYLES.title]}>
                    <h1>MyBets</h1>
                </View>
                <View styles={[STYLES.links]}>
                    <Link to="/login" className={css(STYLES.link)}>
                        Connexion
                    </Link>
                    <Link to="/signin" className={css(STYLES.link)}>
                        Inscription
                    </Link>
                </View>
            </View>
            <View styles={[STYLES.container]}>
                <h1>HomePage</h1>
            </View>
        </View>
    );
}

export default HomePage;
