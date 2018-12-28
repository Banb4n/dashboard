/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    loginContainer: {
        width: '100%',
        height: '95vh',
        marginTop: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        minWidth: '40vw',
        minHeight: '30vh',
        padding: spacing.S300,
        backgroundColor: 'white'
    },
    formWrapper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    errorWrapper: {
        backgroundColor: colors.darkBlueGreen,
        color: 'red',
        margin: spacing.S200
    }
});

function Login(appProps: {}): React.Node {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [error, setError] = React.useState('');
    const backend = React.useContext(BackendContext);

    const onSubmit = async event => {
        event.preventDefault();
        console.log({ backend });
        await backend.app
            .auth()
            .signInWithEmailAndPassword(email, pwd)
            .then(data => console.log(data.user))
            .catch(err => {
                // Handle Errors here.
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log({ errorCode, errorMessage });
                setError(err.message);
                // ...
            });
    };

    return (
        <View styles={[STYLES.container]}>
            <NavBar />
            <View styles={[STYLES.loginContainer]}>
                <View styles={[STYLES.formContainer]}>
                    <h1>Connexion</h1>
                    <form onSubmit={onSubmit}>
                        {error ? (
                            <View styles={[STYLES.errorWrapper]}>{error}</View>
                        ) : null}
                        <View styles={[STYLES.formWrapper]}>
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={pwd}
                                onChange={event => setPwd(event.target.value)}
                            />
                            <Button
                                aria-label="Confirmer"
                                variant="outlined"
                                color="primary"
                                type="submit"
                            >
                                Confirmer
                            </Button>
                        </View>
                    </form>
                </View>
            </View>
        </View>
    );
}

export default Login;
