/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import moment from 'moment';
import { StyleSheet, css } from 'aphrodite-jss';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppContainer from '../../../containers/AppContainer';
import getTotalAmount from '../../../backend/utils/getTotalAmount';
import getProfit from '../../../backend/utils/getProfit';
import getLooses from '../../../backend/utils/getLooses';
import { PageHeader, View, AreaCharts } from '../../styleguide';
import { spacing } from '../../styleguide/css';
import {
    getLoosesCount,
    getWinsCount,
    getBetsCount,
    getFavoriteSport,
    getAverageCote,
    getLastWin,
    getLastLoose
} from '../../../backend/utils';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: spacing.S200,
        textAlign: 'left'
    },
    cardHeader: {
        flex: '0 1 48%',
        paddingTop: spacing.S100
    }
});

function Progress(props: { user: Object }) {
    const { user } = props;

    const loosesCount = getLoosesCount(user.bets);
    const winsCount = getWinsCount(user.bets);
    const betsCount = getBetsCount(user.bets);
    const favoriteSport = getFavoriteSport(user.bets);
    const averageCote = getAverageCote(user.bets);
    const lastWin = getLastWin(user.bets);
    const lastLoose = getLastLoose(user.bets);

    const lastFivesBets = [];
    for (let i = 0; i <= 4; i++) {
        const lastBet = user.bets[i];
        const betDetails = {
            date: moment(lastBet.date).format('MMM D'),
            amount: lastBet.details.amount,
            win: lastBet.details.profit,
            loose:
                lastBet.details.result === 'loose' ? lastBet.details.amount : 0
        };
        lastFivesBets.unshift(betDetails);
    }

    return (
        <div className="finance">
            <PageHeader title="Ma progression">
                <View styles={[STYLES.container]}>
                    <Card className={css(STYLES.cardHeader)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Mes paris:
                            </Typography>
                            <ul>
                                <li>Total: {betsCount}</li>
                                <li>Gagné: {winsCount}</li>
                                <li>Perdus: {loosesCount}</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className={css(STYLES.cardHeader)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Mes 5 derniers paris:
                            </Typography>{' '}
                            <AreaCharts data={lastFivesBets} />
                        </CardContent>
                    </Card>
                </View>
            </PageHeader>
        </div>
    );
}

const ProgressConnected = (props: any): React.Node => (
    <Subscribe to={[AppContainer]}>
        {appContainer => <Progress user={appContainer.state.user} {...props} />}
    </Subscribe>
);

export default ProgressConnected;
