/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import Backend from './backend/Backend';
import './App.css';
import { Drawer, View } from './components/styleguide';
import { spacing } from './components/styleguide/css';
import ROUTES from './routes';
import NavList from './components/Nav/NavList';
import { useQuery } from './backend/hooks';

// Initialze firebase
const backend = new Backend();

const STYLES = StyleSheet.create({
    pagesContainer: {
        padding: `0 ${spacing.S300}px`,
        textDecoration: 'none'
    }
});

function App(appProps: {}): React.Node {
    const { database } = backend;

    const user = useQuery(database, 'users', 'oUjln5CS4iSKvyJbQpVJ');
    console.log({ user });
    return (
        <div className="App">
            <Provider>
                <Router>
                    <Drawer title="Mon dashboard" navigation={<NavList />}>
                        <View styles={[STYLES.pagesContainer]}>
                            {ROUTES.map(route => (
                                <Route
                                    exact
                                    path={route.path}
                                    component={route.component}
                                />
                            ))}
                        </View>
                    </Drawer>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
