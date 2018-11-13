/* @flow */
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import getCurrentCote from '../../backend/utils/getCurrentCote';

function BetCard(props: {
    bet: Object,
    actions: ?React.Node
    // styles: Object
}) {
    const { bet, actions } = props;

    const STYLES = {
        cardContainer: {
            flex: '0 1 50%',
            margin: '16px 0 16px 16px'
        },
        teamName: {
            fontSize: 24
        }
    };

    return (
        <Card style={STYLES.cardContainer} className="padding-s100">
            <CardContent>
                <p>
                    <span style={STYLES.teamName}>{bet.details.team1}</span> vs{' '}
                    <span style={STYLES.teamName}>{bet.details.team2}</span>
                </p>
                <ul className="margin-s100" style={{ textAlign: 'left' }}>
                    <li>
                        Cote:{' '}
                        {`${getCurrentCote(bet)} ${
                            getCurrentCote(bet) >= 2 ? '🔥' : ''
                        }`}
                    </li>
                    <li>Gagne: {bet.details.result === 'win' ? '✅' : '❌'}</li>
                    <li>Joué {bet.details.amount} euros</li>
                    {bet.details.result ? (
                        <li>
                            {bet.details.profit > 0
                                ? `Profit 💸: + ${bet.details.profit} euros`
                                : `Perd 😭: - ${bet.details.amount} euros`}
                        </li>
                    ) : null}
                </ul>
            </CardContent>
            <CardActions>{actions}</CardActions>
        </Card>
    );
}

export default BetCard;
