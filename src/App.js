/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';

import Backend from './backend/Backend';
import { BackendContext } from './backend/context';
import { PrivateRoute } from './components/common';
import './App.css';
import { Drawer, View } from './components/styleguide';
import { spacing } from './components/styleguide/css';
import ROUTES from './routes';
import NavList from './components/Nav/NavList';
import BottomNavList from './components/Nav/BottomNavList';
import { useQuery, useCurrentUser } from './backend/hooks';
import { HomePage, Login, Logout, Signup } from './components/pages/website';
import NoMatch from './components/pages/errors/NoMatch';

// Initialze firebase
const backend = new Backend();

const STYLES = StyleSheet.create({
    pagesContainer: {
        padding: `0 ${spacing.S300}px`,
        textDecoration: 'none',
        position: 'relative'
    }
});

function App(appProps: {}): React.Node {
    const { database, app } = backend;
    const currentUser = useCurrentUser(app);
    const [userLoggedIn, setUserLoggedIn] = React.useState(currentUser);

    React.useEffect(
        () => {
            if (currentUser) {
                setUserLoggedIn(currentUser);
            }
        },
        [currentUser]
    );

    let user;
    if (currentUser) {
        console.log({ currentUser });
        user = useQuery(database, 'users', currentUser.uid);
    }

    console.log({
        fetchedUser: user || {},
        auth: app.auth().currentUser,
        userIsLoggedIn: userLoggedIn,
        currentUser
    });

    return (
        <Provider>
            <BackendContext.Provider value={backend}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route exact path="/signup" component={Signup} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/logout" exact component={Logout} />
                        {ROUTES.map(route => (
                            <PrivateRoute
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                        {/* No match route */}
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </BackendContext.Provider>
        </Provider>
    );
}

export default App;
export { BackendContext };
