/* @flow */
import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'unstated';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import InsertChart from '@material-ui/icons/InsertChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import TableChart from '@material-ui/icons/TableChart';

import { type BackendType } from './backend/Backend';
import './App.css';
import { Drawer } from './components/styleguide';
import ROUTES from './routes';

const ROUTES_ICONS = {
    profil: {
        icon: AccountBox
    },
    finance: {
        icon: AttachMoney
    },
    bets: {
        icon: TableChart
    },
    progress: {
        icon: InsertChart
    }
};

function App(props: { backend: BackendType }) {
    const {
        backend: { database }
    } = props;
    console.log({ database });
    database.addData('users', {
        country: 'FR',
        displayName: 'Test ajout',
        resume: {
            invest: 0,
            isPositive: false,
            looses: 0,
            profit: 0
        }
    });
    const navItems = (
        <List>
            {ROUTES.map(route => {
                const Icon = ROUTES_ICONS[route.name].icon;
                console.log({ route, Icon });
                return (
                    <Link to={route.path}>
                        <ListItem button>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={route.title} />
                        </ListItem>
                    </Link>
                );
            })}
        </List>
    );

    return (
        <div className="App">
            <Provider>
                <Router>
                    <Drawer title="Mon dashboard" navigation={navItems}>
                        {ROUTES.map(route => (
                            <Route
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                    </Drawer>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
