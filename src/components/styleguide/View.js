/* @flow */
import * as React from 'react';
import { type SheetDefinitions, css } from 'aphrodite-jss';

function View(props: { styles: SheetDefinitions[], children: React.Node }) {
    const { styles, children } = props;

    return <div className={css(...styles)}>{children}</div>;
}

export default View;
