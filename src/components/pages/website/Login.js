/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import Button from '@material-ui/core/Button';

import { View, NavBar } from '../../styleguide';
import { colors, spacing } from '../../styleguide/css';
import { BackendContext } from '../../../backend/context';

const STYLES = StyleSheet.create({
    container: {
        margin: 0,
        width: '100vw',
        maxHeight: '100vh',
        backgroundColor: colors.lightGrey
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: colors.green
    },
    loginContainer: {
        width: '100%',
        height: '95vh',
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formWrapper: {
        padding: spacing.S300,
        backgroundColor: 'white'
    }
});

function Login(appProps: {}): React.Node {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const backend = React.useContext(BackendContext);

    const onSubmit = event => {
        event.preventDefault();
        console.log({ backend });
        backend.app
            .auth()
            .signInWithEmailAndPassword(email, pwd)
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage });
                // ...
            });
    };

    return (
        <View styles={[STYLES.container]}>
            <NavBar>
                <View styles={[STYLES.title]}>
                    <h1>MyBets</h1>
                </View>
            </NavBar>
            <View styles={[STYLES.loginContainer]}>
                <View styles={[STYLES.formWrapper]}>
                    <h1>Connexion</h1>
                    <form onSubmit={onSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            name="email"
                        />
                        <input
                            type="passsword"
                            value={pwd}
                            onChange={event => setPwd(event.target.value)}
                            name="pwd"
                        />
                        <Button
                            aria-label="Connexion"
                            variant="outlined"
                            color="primary"
                            type="submit"
                        >
                            Connexion
                        </Button>
                    </form>
                </View>
            </View>
        </View>
    );
}

export default Login;
