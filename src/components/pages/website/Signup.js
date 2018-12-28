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
    title: {
        display: 'flex',
        justifyContent: 'center',
        color: colors.green
    },
    signupContainer: {
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

function Signup(appProps: {}): React.Node {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [error, setError] = React.useState('');
    const backend = React.useContext(BackendContext);

    const onSubmit = event => {
        event.preventDefault();
        backend.app
            .auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(data => console.log({ data }))
            .catch(err => {
                // Handle Errors here.
                const errorCode = err.code;
                const errorMessage = err.message;
                setError(errorMessage);
                console.error({ errorCode, errorMessage });
            });
    };

    return (
        <View styles={[STYLES.container]}>
            <NavBar>
                <View styles={[STYLES.title]}>
                    <h1>MyBets</h1>
                </View>
            </NavBar>
            <View styles={[STYLES.signupContainer]}>
                <View styles={[STYLES.formContainer]}>
                    <h1>Inscriptions</h1>
                    {error ? (
                        <View styles={[STYLES.errorWrapper]}>{error}</View>
                    ) : null}
                    <form onSubmit={onSubmit}>
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

export default Signup;
