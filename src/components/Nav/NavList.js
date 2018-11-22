/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import { spacing, colors } from '../styleguide/css';
import ROUTES from '../../routes';
import NavItem from './NavItem';

const STYLES = StyleSheet.create({
    hrefReset: {
        textDecoration: 'none'
    }
});

function NavList(props: {}): React.Node {
    return (
        <List>
            {ROUTES.map(route => (
                <Link to={route.path} className={css(STYLES.hrefReset)}>
                    <NavItem route={route} />
                </Link>
            ))}
        </List>
    );
}

export default NavList;
