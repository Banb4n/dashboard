/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'unstated';
// import { app } from 'firebase-admin';

import Backend from './backend/Backend';
import { BackendContext } from './backend/context';
import { PrivateRoute } from './components/common';
import './App.css';
import { Drawer, View } from './components/styleguide';
import { spacing } from './components/styleguide/css';
import ROUTES from './routes';
import NavList from './components/Nav/NavList';
import { useQuery } from './backend/hooks';
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

    const user = useQuery(database, 'users', 'oUjln5CS4iSKvyJbQpVJ');
    console.log({ user, auth: app.auth().currentUser });
    const currentUser = false;

    return (
        <Provider>
            <BackendContext.Provider value={backend}>
                <Router>
                    <Switch>
                        {currentUser ? (
                            <Drawer
                                title="Mon dashboard"
                                navigation={<NavList />}
                            >
                                <View styles={[STYLES.pagesContainer]}>
                                    {ROUTES.map(route => (
                                        <PrivateRoute
                                            exact
                                            path={route.path}
                                            component={route.component}
                                            user={currentUser}
                                        />
                                    ))}
                                </View>
                            </Drawer>
                        ) : (
                            <React.Fragment>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/signUp"
                                    component={Signup}
                                />
                                <Route
                                    exact
                                    path="/logout"
                                    component={Logout}
                                />
                                {ROUTES.filter(
                                    route => route.name !== 'profil'
                                ).map(route => (
                                    <PrivateRoute
                                        exact
                                        path={route.path}
                                        component={route.component}
                                        user={currentUser}
                                    />
                                ))}
                            </React.Fragment>
                        )}
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
