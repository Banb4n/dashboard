/* @flow */
import * as React from 'react';
import { Subscribe } from 'unstated';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MUIDataTable from 'mui-datatables';
import BetTable from './styleguide/BetTable';
import AppContainer from '../containers/AppContainer';
import getTotalAmount from '../backend/utils/getTotalAmount';
import getProfit from '../backend/utils/getProfit';
import getLooses from '../backend/utils/getLooses';

function Finance(props: { user: Object }) {
    const { user } = props;

    return (
        <div className="finance">
            <Card>
                <CardContent>
                    <h2>Status: </h2>
                    <ul>
                        <li>
                            Montant investit: {getTotalAmount(user.bets)} euros
                        </li>
                        <li>Profit: + {getProfit(user.bets)} euros</li>
                        <li>Pertes: - {getLooses(user.bets)} euros</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

const FinanceConnected = (props: any): React.Node => (
    <Subscribe to={[AppContainer]}>
        {appContainer => <Finance user={appContainer.state.user} {...props} />}
    </Subscribe>
);

export default FinanceConnected;
