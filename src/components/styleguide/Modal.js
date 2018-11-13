/* @flow */
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        padding: 0,
        margin: 0
    }
});

class SimpleModal extends React.Component<*, *> {
    props: {
        classes: Object,
        isOpen: boolean,
        onClose: () => void,
        children: React.Node
    };

    render() {
        const { classes, isOpen, onClose, children } = this.props;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={isOpen}
                onClose={onClose}
                onBackdropClick={onClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    {children}
                    <SimpleModalWrapped />
                </div>
            </Modal>
        );
    }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
