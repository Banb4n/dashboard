/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import { StyleSheet, css } from 'aphrodite-jss';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppContainer from '../../../containers/AppContainer';
import getTotalAmount from '../../../backend/utils/getTotalAmount';
import getProfit from '../../../backend/utils/getProfit';
import getLooses from '../../../backend/utils/getLooses';
import { PageHeader, View } from '../../styleguide';
import { spacing } from '../../styleguide/css';

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
                                <li>
                                    Montant investit:{' '}
                                    {getTotalAmount(user.bets)} euros
                                </li>
                                <li>Profit: + {getProfit(user.bets)} euros</li>
                                <li>Pertes: - {getLooses(user.bets)} euros</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className={css(STYLES.cardHeader)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Mes finances:
                            </Typography>{' '}
                            <ul>
                                <li>
                                    Montant investit:{' '}
                                    {getTotalAmount(user.bets)} euros
                                </li>
                                <li>Profit: + {getProfit(user.bets)} euros</li>
                                <li>Pertes: - {getLooses(user.bets)} euros</li>
                            </ul>
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
