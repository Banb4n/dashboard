/* @flow */
import * as React from 'react';
import { StyleSheet, css, type SheetDefinitions } from 'aphrodite-jss';
import View from './View';
import { spacing } from './css';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
        padding: spacing.S100
    },
    pageTitle: {
        fontSize: 32,
        color: 'grey',
        fontFamily: "'Open Sans', sans-serif",
        textAlign: 'left'
    }
});

function PageHeader(props: {
    title: string,
    children: React.Node,
    styles: SheetDefinitions
}) {
    const { title, children, styles } = props;

    return (
        <View styles={[STYLES.container, styles]}>
            <h1 className={css(STYLES.pageTitle)}>{title}</h1>
            {children}
        </View>
    );
}

export default PageHeader;
