/* @flow */
import * as React from 'react';
import { StyleSheet } from 'aphrodite-jss';

import { Drawer, View } from '../styleguide';
import { spacing } from '../styleguide/css';
import NavList from '../Nav/NavList';
import BottomNavList from '../Nav/BottomNavList';

const STYLES = StyleSheet.create({
    pagesContainer: {
        padding: `0 ${spacing.S300}px`,
        textDecoration: 'none',
        position: 'relative'
    }
});

function Layout(props: { children: React.Node }): React.Node {
    const { children } = props;

    return (
        <Drawer
            title="Mon dashboard"
            navigation={<NavList />}
            bottomList={<BottomNavList />}
        >
            <View styles={[STYLES.pagesContainer]}>{children}</View>
        </Drawer>
    );
}

export default Layout;
