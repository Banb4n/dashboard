/* @flow */
import React, { useState } from 'react';
import moment from 'moment';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MUIDataTable from "mui-datatables";
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import getCurrentCote from '../backend/utils/getCurrentCote';


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
            getBetDetails(betUID)
        }    
    };

    const getBetDetails = (betID: string) => {        
        const bet = bets.filter(bet => bet.uid === betID);
        setCurrentBet(bet[0]);
    }

    const onCloseBetDetails = () => setCurrentBet(null);

    const currentCote = currentBet && getCurrentCote(currentBet.details.choice);
    
    return (
        <div className="userProfile">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
            
                <Card style={{ flex: '0 1 50%', margin: '16px 16px 16px 0' }} className="padding-s200">
                    <CardContent>
                        <h2>Ajouter un nouveau paris</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Ajouter</Button>
                    </CardActions>
                </Card>
                {currentBet && (
                    <Card style={{ flex: '0 1 50%', margin: '16px 0 16px 16px' }} className="padding-s200">
                        <CardContent>
                            <p>{currentBet.details.team1} vs {currentBet.details.team2}</p>
                            <ul className="margin-s100" style={{ textAlign: 'left' }}>
                                <li>Cote: {`${currentBet.details[currentCote]} ${currentBet.details[currentCote] >= 2 ? '🔥' : null}`}</li>
                                <li>Gagne: {currentBet.details.result ? '✅' : '❌'}</li>
                                <li>Joué {currentBet.details.amount} euros</li>
                                {currentBet.details.result ? (
                                    <li>💸: + {currentBet.details.profit} euros</li>
                                ) : null}
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={onCloseBetDetails}>Close</Button>
                        </CardActions>
                    </Card>
                )}
            </div>
            <BetTable
                bets={bets}
                onClick={onBetClick}
            />
        </div>
    );
}

const BetsConnected = (props: any) => (
    <Subscribe to={[AppContainer]}>
        {appContainer => (
            <Bets user={appContainer.state.user} {...props} />
        )}
    </Subscribe>
);

export default BetsConnected;
