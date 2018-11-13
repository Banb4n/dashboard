/* @flow */
import * as React from 'react';
import Button from '@material-ui/core/Button';

function FloatingButton(props: { children: React.Node }) {
    const { children, ...rest } = props;

    return (
        <Button
            variant="extendedFab"
            aria-label="Delete"
            className="floating-button"
            style={{
                margin: 24,
                position: 'fixed',
                bottom: '0%',
                right: '0%'
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}

export default FloatingButton;
