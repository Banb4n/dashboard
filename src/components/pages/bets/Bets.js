/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ControlPoint from '@material-ui/icons/ControlPoint';
import BetTable from '../../styleguide/BetTable';
import BetsHeader from './BetsHeader';
import AppContainer from '../../../containers/AppContainer';
import { Modal, FloatingButton } from '../../styleguide';
import BetCard from './BetCard';
import NewProno from './NewProno';

function Bets(props: { bets: Object }) {
    const { bets } = props;
    const [currentBet, setCurrentBet] = React.useState(null);
    const [addNewBetModal, setAddNewBetModal] = React.useState(false);

    const onBetClick = (
        rowData: Array<String>,
        rowMeta: {
            dataIndex: number,
            rowIndex: number
        }
    ): void => {
        const betUID = rowData[0];

        if (betUID) {
            const bet = bets.filter(item => item.uid === betUID);
            setCurrentBet(bet[0]);
        }
    };

    const onClose = () => setCurrentBet(null);

    const onOpenFormModal = (event: SyntheticEvent<*>) => {
        setAddNewBetModal(true);
    };

    const onCloseFormModal = () => setAddNewBetModal(false);

    return (
        <div className="userProfile">
            <FloatingButton onClick={onOpenFormModal}>
                <ControlPoint style={{ marginRight: 4 }} />
                Nouveau Pari
            </FloatingButton>
            <BetsHeader bets={bets} />
            <BetTable bets={bets} onClick={onBetClick} tableOptions={null} />
            {currentBet && (
                <React.Fragment>
                    <Modal isOpen={!!currentBet} onClose={onClose}>
                        <BetCard
                            bet={currentBet}
                            actions={<Button onClick={onClose} value="close" />}
                        />
                    </Modal>
                </React.Fragment>
            )}
            {addNewBetModal && (
                <Modal isOpen={addNewBetModal} onClose={onCloseFormModal}>
                    <NewProno />
                </Modal>
            )}
        </div>
    );
}

const BetsConnected = (props: any) => (
    <Subscribe to={[AppContainer]}>
        {appContainer => (
            <Bets bets={appContainer.state.user.bets} {...props} />
        )}
    </Subscribe>
);

export default BetsConnected;
