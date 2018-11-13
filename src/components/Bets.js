/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ControlPoint from '@material-ui/icons/ControlPoint';
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import { BetCard, Modal } from './styleguide';

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
                onClick={onOpenFormModal}
            >
                <ControlPoint style={{ marginRight: 4 }} />
                Nouveau Pari
            </Button>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Card style={{ flex: '0 1 100%' }} className="padding-100">
                    <CardContent>
                        <h1 style={{ textAlign: 'center' }}>Mes paris</h1>
                        <div>
                            <p />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={onOpenFormModal}>
                            Ajouter
                        </Button>
                    </CardActions>
                </Card>
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
