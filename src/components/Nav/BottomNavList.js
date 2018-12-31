/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import NavItem from './NavItem';

const STYLES = StyleSheet.create({
    hrefReset: {
        textDecoration: 'none'
    }
});

const ROUTES = [
    {
        title: 'Deconnexion',
        name: 'logout',
        path: '/logout'
    }
];

function BottomNavList(props: {}): React.Node {
    return (
        <List>
            {ROUTES.map(route => (
                <a href={route.path} className={css(STYLES.hrefReset)}>
                    <NavItem route={route} isActive={false} />
                </a>
            ))}
        </List>
    );
}

export default BottomNavList;
