/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import getCurrentCote from '../backend/utils/getCurrentCote';
import { BetCard } from './styleguide';

function Bets(props: { bets: Object }) {
    const { bets } = props;
    const [currentBet, setCurrentBet] = React.useState(null);

    const onBetClick = (
        rowData: Array<String>,
        rowMeta: {
            dataIndex: number,
            rowIndex: number
        }
    ): void => {
        const betUID = rowData[0];

        if (betUID) {
            const bet = bets.filter(bet => bet.uid === betUID);
            setCurrentBet(bet[0]);
        }
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
                        <h2>Mes paris</h2>
                        <div>
                            <p />
                        </div>
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
        {appContainer => (
            <Bets bets={appContainer.state.user.bets} {...props} />
        )}
    </Subscribe>
);

export default BetsConnected;
