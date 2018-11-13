/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import { StyleSheet, css } from 'aphrodite-jss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ControlPoint from '@material-ui/icons/ControlPoint';
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import { BetCard, Modal, View, FloatingButton } from './styleguide';
import { spacing } from './styleguide/css';

const STYLES = StyleSheet.create({
    betsHeader: {
        width: '100%',
        padding: spacing.S400,
        display: 'flex'
    },
    pageTitle: {
        fontSize: 32,
        color: 'grey',
        fontFamily: "'Open Sans', sans-serif"
    }
});

function Bets(props: { bets: Object }) {
    const { bets } = props;
    const [currentBet, setCurrentBet] = React.useState(null);
    const [value, setValue] = React.useState(null);

    const initialFormValue = ({
        team1: '',
        team2: '',
        cote1: 0,
        coteN: 0,
        cote2: 0,
        amount: 0,
        choice: 0,
        finish: false,
        result: null,
        profit: 0
    }: {
        team1: string,
        team2: string,
        cote1: number,
        coteN: number,
        cote2: number,
        amount: number,
        choice: number,
        finish: boolean,
        result: 'win' | 'loose' | null,
        profit: number
    });

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

    const onOpenFormModal = () => setValue(initialFormValue);

    const onCloseFormModal = () => setValue(null);

    return (
        <div className="userProfile">
            <FloatingButton onClick={onOpenFormModal}>
                <ControlPoint style={{ marginRight: 4 }} />
                Nouveau Pari
            </FloatingButton>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <View styles={[STYLES.betsHeader]}>
                    <h1 className={css(STYLES.pageTitle)}>Mes paris</h1>
                    <div>
                        <p />
                    </div>
                </View>
                {currentBet && (
                    <React.Fragment>
                        <Modal isOpen={!!currentBet} onClose={onClose}>
                            <BetCard
                                bet={currentBet}
                                actions={
                                    <Button onClick={onClose} value="close" />
                                }
                            />
                        </Modal>
                    </React.Fragment>
                )}
                {value && (
                    <Modal isOpen={!!value} onClose={onCloseFormModal}>
                        <Card>
                            <h2>Nouveau prono</h2>
                        </Card>
                    </Modal>
                )}
            </div>
            <BetTable bets={bets} onClick={onBetClick} tableOptions={null} />
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
