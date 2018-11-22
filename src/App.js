/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import { type BackendType, type DatabaseType } from './backend/Backend';
import './App.css';
import { Drawer, View } from './components/styleguide';
import { spacing } from './components/styleguide/css';
import ROUTES from './routes';
import NavList from './components/Nav/NavList';

const useQueryDB = (db: DatabaseType, collection: string, uid: string) => {
    const [value, setValue] = React.useState('');

    React.useEffect(async () => {
        const response = await db.getData(collection, uid);
        console.log(response);
        setValue(response);
    }, []);

    return value;
};

const STYLES = StyleSheet.create({
    pagesContainer: {
        padding: `0 ${spacing.S300}px`,
        textDecoration: 'none'
    }
});

function App(appProps: { backend: BackendType }): React.Node {
    const {
        backend: { database }
    } = appProps;
    const user = useQueryDB(database, 'users', 'oUjln5CS4iSKvyJbQpVJ');
    const bets = useQueryDB(database, 'bets', user.bets);
    console.log({ user, bets });

    return (
        <div className="App">
            <Provider>
                <Router>
                    <Drawer title="Mon dashboard" navigation={<NavList />}>
                        <View styles={STYLES.pagesContainer}>
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
