/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { Divider } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import getCurrentCote from '../../../backend/utils/getCurrentCote';
import { Text, View } from '../../styleguide';
import { spacing } from '../../styleguide/css';
import BetCardHeader from './BetCardHeader';

const STYLES = StyleSheet.create({
    cardContainer: {
        padding: spacing.S100,
        minWidth: 550
    },
    betCardContent: {
        marginTop: 150
    },
    chipsContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: spacing.S100
    },
    chip: {
        marginRight: spacing.S200
    }
});

function BetCard(props: {
    bet: Object,
    actions: ?React.Node
    // styles: Object
}) {
    const { bet, actions } = props;

    return (
        <Card className={css(STYLES.cardContainer)}>
            <CardContent>
                <BetCardHeader bet={bet} />
                <View styles={STYLES.betCardContent}>
                    <Paper className={css(STYLES.chipsContainer)}>
                        <Chip
                            label={`
                        ${getCurrentCote(bet) >= 2 ? '🔥' : ''} 
                        Cote: ${getCurrentCote(bet)} 
                        `}
                            // className={classes.chip}
                            variant="outlined"
                            className={css(STYLES.chip)}
                        />
                        <Chip
                            label={`
                        ${
                            bet.details.result === 'win'
                                ? '✅ Gagne'
                                : '❌ Perdu'
                        } 
                        `}
                            color={
                                bet.details.result === 'win'
                                    ? 'primary'
                                    : 'secondary'
                            }
                            variant="outlined"
                            className={css(STYLES.chip)}
                        />
                    </Paper>
                    <Text />
                    <Text>Montant: {bet.details.amount} euros</Text>
                    {bet.details.result ? (
                        <Text>
                            {bet.details.profit > 0
                                ? `Profit 💸: + ${bet.details.profit} euros`
                                : `Perd 😭: - ${bet.details.amount} euros`}
                        </Text>
                    ) : null}
                </View>
            </CardContent>
            <CardActions>{actions}</CardActions>
        </Card>
    );
}

export default BetCard;
