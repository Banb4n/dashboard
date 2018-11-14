/* @flow */
import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Divider } from '@material-ui/core';
import { spacing } from '../../styleguide/css';
import { Text } from '../../styleguide';
import bgPattern from '../../../assets/imgs/bg1vs1.png';

function BetCardHeader(props: {
    bet: Object
    // styles: Object
}) {
    const { bet, actions } = props;

    const STYLES = {
        cardContainer: {
            width: '101%',
            minHeight: 150,
            top: 0,
            left: '-2%',
            position: 'absolute',
            display: 'flex',
            backgroundImage: `url(${bgPattern})`,
            margin: `0 ${spacing.S100}px`,
            borderRadius: 3,
            boxShadow: '1px 2px 2px 1px rgba(0, 0, 0, .5)',
            padding: `${spacing.S200}px ${spacing.S300}px`,
            marginBottom: spacing.S100
        },
        teamName: {
            fontSize: 24
        }
    };

    return (
        <Card style={STYLES.cardContainer} className="padding-s100">
            <p>
                <span style={STYLES.teamName}>{bet.details.team1}</span> vs{' '}
                <span style={STYLES.teamName}>{bet.details.team2}</span>
            </p>
        </Card>
    );
}

export default BetCardHeader;
