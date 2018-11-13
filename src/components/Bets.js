/* @flow */
import React, { useState } from 'react';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import getCurrentCote from '../backend/utils/getCurrentCote';
import { BetCard } from './styleguide';

function Bets(props: { user: Object }) {
    const { bets } = props.user;
    const [currentBet, setCurrentBet] = useState(null);

    const onBetClick = (
        rowData: Array<String>,
        rowMeta: {
            dataIndex: number,
            rowIndex: number
        }
    ): void => {
        const betUID = rowData[0];

        if (betUID) {
            getBetDetails(betUID);
        }
    };

    const getBetDetails = (betID: string) => {
        const bet = bets.filter(bet => bet.uid === betID);
        setCurrentBet(bet[0]);
    };

    const onCloseBetDetails = () => setCurrentBet(null);

    return (
        <div className="userProfile">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Card
                    style={{ flex: '0 1 50%', margin: '16px 16px 16px 0' }}
                    className="padding-100"
                >
                    <CardContent>
                        <h2>Ajouter un nouveau paris</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Ajouter</Button>
                    </CardActions>
                </Card>
                {currentBet && <BetCard bet={currentBet} />}
            </div>
            <BetTable bets={bets} onClick={onBetClick} tableOptions={null} />
        </div>
    );
}

const BetsConnected = (props: any) => (
    <Subscribe to={[AppContainer]}>
        {appContainer => <Bets user={appContainer.state.user} {...props} />}
    </Subscribe>
);

export default BetsConnected;
