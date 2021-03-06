/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import { useCurrentUser } from '../../backend/hooks';
import { BackendContext } from '../../backend/context';
import View from './View';
import { colors, spacing } from './css';

const STYLES = StyleSheet.create({
    navbar: {
        width: '100%',
        height: '60px',
        background: colors.darkBlueGreen,
        position: 'fixed',
        boxShadow: '.5px 1px 3px rgba(0, 0, 0, .8)',
        display: 'flex',
        alignItems: 'center',
        padding: spacing.S100,
        marginTop: 0,
        top: 0
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
    },
    buttonLink: {
        textDecoration: 'none',
        marginRight: spacing.S200
    },
    title: {
        color: colors.green,
        textDecoration: 'none'
    }
});

function NavBar(props: { children: React.Node }): React.Node {
    const backend = React.useContext(BackendContext);
    const currentUser = useCurrentUser(backend.app);

    return (
        <View styles={[STYLES.navbar]}>
            <Link to="/" className={css(STYLES.title)}>
                <h1>MyBets</h1>
            </Link>
            <View styles={[STYLES.links]}>
                {!currentUser ? (
                    <React.Fragment>
                        <Link to="/login" className={css(STYLES.link)}>
                            Connexion
                        </Link>
                        <Link to="/signup" className={css(STYLES.link)}>
                            Inscription
                        </Link>
                    </React.Fragment>
                ) : (
                    <Link to="/bets" className={css(STYLES.buttonLink)}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={css(STYLES.buttonLink)}
                        >
                            <AccountCircle />
                            Mon dashboard
                        </Button>
                    </Link>
                    // <Link to="/logout" className={css(STYLES.link)}>
                    //     Deconnexion
                    // </Link>
                )}
            </View>
        </View>
    );
}

export default NavBar;
