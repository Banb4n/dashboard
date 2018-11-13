/* @flow */
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { View } from '../../styleguide';
import { spacing } from '../../styleguide/css';
import {
    getLoosesCount,
    getWinsCount,
    getBetsCount
} from '../../../backend/utils';

const STYLES = StyleSheet.create({
    betsHeader: {
        width: '100%',
        padding: spacing.S100
    },
    pageTitle: {
        fontSize: 32,
        color: 'grey',
        fontFamily: "'Open Sans', sans-serif",
        textAlign: 'left'
    },
    betsDetailsContainer: {
        margin: spacing.S100,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 2,
        padding: `${spacing.S100}px ${spacing.S200}px`,
        display: 'flex',
        justifyContent: 'space-around'
    },
    betDetails: {
        flex: '0 1 45%',
        textAlign: 'left',
        padding: `0 ${spacing.S200}px`
    },
    betDetailsItem: {
        fontSize: 16,
        fontFamilly: 'Open Sans, sans-serif',
        color: 'dimgrey'
    },
    betDetailsValue: {
        fontWeight: 500,
        fontSize: 18,
        color: 'black'
    },
    STATS: {
        flex: '0 1 45%',
        margin: spacing.S100,
        display: 'flex',
        justifyContent: 'center',
        background: 'dimgrey',
        alignItems: 'center',
        textAlign: 'center'
    }
});

function BetsHeader(props: { bets: Object }) {
    const { bets } = props;

    const loosesCount = getLoosesCount(bets);
    const winsCount = getWinsCount(bets);
    const betsCount = getBetsCount(bets);

    return (
        <div className="betsHeader">
            <View styles={STYLES.betsHeader}>
                <h1 className={css(STYLES.pageTitle)}>Mes paris</h1>
                <View styles={STYLES.betsDetailsContainer}>
                    <View styles={STYLES.betDetails}>
                        <p className={css(STYLES.betDetailsItem)}>
                            <span className={css(STYLES.betDetailsValue)}>
                                {betsCount}
                            </span>{' '}
                            paris
                        </p>
                        <p className={css(STYLES.betDetailsItem)}>
                            <span className={css(STYLES.betDetailsValue)}>
                                {winsCount}
                            </span>{' '}
                            gagnant
                        </p>
                        <p className={css(STYLES.betDetailsItem)}>
                            <span className={css(STYLES.betDetailsValue)}>
                                {loosesCount}
                            </span>{' '}
                            perdant
                        </p>
                    </View>
                    <View styles={STYLES.STATS}>STATS</View>
                </View>
            </View>
        </div>
    );
}

export default BetsHeader;
