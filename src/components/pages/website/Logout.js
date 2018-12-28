/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import { Redirect } from 'react-router-dom';

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
    errorWrapper: {
        backgroundColor: colors.darkBlueGreen,
        color: 'red',
        margin: spacing.S200
    }
});

function Logout(props: {}): React.Node {
    const [error, setError] = React.useState('');
    const backend = React.useContext(BackendContext);

    React.useEffect(async () => {
        await backend.app
            .auth()
            .signOut()
            .catch(err => {
                // An error happened.
                console.error(err);
                setError(err);
            });
    });

    return error ? (
        <View styles={[STYLES.container]}>
            <NavBar />
            <View styles={[STYLES.signupContainer]}>
                <View styles={[STYLES.formContainer]}>
                    {error ? (
                        <View styles={[STYLES.errorWrapper]}>
                            {error.message}
                        </View>
                    ) : null}
                </View>
            </View>
        </View>
    ) : (
        <Redirect to="/" />
    );
}

export default Logout;
