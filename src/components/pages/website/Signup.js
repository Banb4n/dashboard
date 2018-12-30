/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { User } from '../../../backend/models';
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

function Signup(props: { history: Object }): React.Node {
    const { history } = props;
    const [error, setError] = React.useState('');
    const backend = React.useContext(BackendContext);

    // Form values
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [displayName, setDisplayName] = React.useState('');
    const [country, setCountry] = React.useState('');

    const onSubmit = async event => {
        event.preventDefault();

        try {
            const auth = await backend.app
                .auth()
                .createUserWithEmailAndPassword(email, pwd);

            const user = new User({
                uid: auth.user.uid,
                displayName,
                country,
                email,
                bets: '',
                bookmakers: []
            });

            await backend.database.addData('users', user.serialize());
        } catch (err) {
            // Handle Errors here.
            const errorCode = err.code;
            const errorMessage = err.message;
            setError(errorMessage);
            console.error({ errorCode, errorMessage });
        } finally {
            history.push('/login');
        }
    };

    return (
        <View styles={[STYLES.container]}>
            <NavBar />
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
                                label="Mot de passe"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={pwd}
                                onChange={event => setPwd(event.target.value)}
                            />
                            <TextField
                                label="Pseudo"
                                type="text"
                                name="displayName"
                                autoComplete="name"
                                margin="normal"
                                variant="outlined"
                                onChange={event =>
                                    setDisplayName(event.target.value)
                                }
                                value={displayName}
                            />
                            <TextField
                                label="Pays"
                                type="text"
                                name="country"
                                autoComplete="country"
                                margin="normal"
                                variant="outlined"
                                onChange={event =>
                                    setCountry(event.target.value)
                                }
                                value={country}
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
