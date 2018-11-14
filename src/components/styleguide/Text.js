/* @flow */
import * as React from 'react';
import { StyleSheet, type SheetDefinitions, css } from 'aphrodite-jss';

const STYLES = StyleSheet.create({
    UIItem: {
        fontSize: 15,
        fontFamilly: 'Open Sans, sans-serif',
        color: 'dimgrey'
    }
});

function Text(props: { styles: ?SheetDefinitions, children: React.Node }) {
    const { styles, children, ...rest } = props;

    return (
        <p className={css(STYLES.UIItem, styles)} {...rest}>
            {children}
        </p>
    );
}

export default Text;
