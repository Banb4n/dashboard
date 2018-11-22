/* @flow */
import * as React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';
import { StyleSheet, css } from 'aphrodite-jss';
import { View, Text, PageHeader } from '../../styleguide';
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
    betsDetailsContainer: {
        margin: spacing.S100,
        borderRadius: 2,
        padding: `${spacing.S100}px ${spacing.S100}px`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    betDetails: {
        flex: '0 1 45%',
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-around'
    },
    betDetailsItem: {
        margin: 3,
        padding: 4,
        paddingLeft: spacing.S200
    },
    betItemSecondary: {
        padding: 4,
        marginLeft: spacing.S200,
        paddingLeft: spacing.S100,
        borderLeft: '1px solid dimgrey'
    },
    betItemPrimary: {
        padding: 4,
        borderLeft: '1px solid dimgrey',
        paddingLeft: spacing.S100
    },
    betDetailsHeader: {
        padding: 2,
        marginTop: 3,
        marginBottom: 4,
        fontSize: 20,
        fontFamilly: 'Open Sans, sans-serif',
        color: 'dimgrey'
    },
    betDetailsValue: {
        fontWeight: 600,
        color: 'black'
    },
    divider: {
        width: 1,
        background: 'dimgrey',
        display: 'flex',
        margin: 20,
        borderRadius: 10
    },
    STATS: {
        flex: '0 1 45%',
        margin: spacing.S100,
        display: 'flex',
        justifyContent: 'center',
        background: 'dimgrey',
        alignItems: 'center',
        textAlign: 'center'
    },
    pieChartContainer: {
        flex: '0 1 45%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

function BetsHeader(props: { bets: Object }) {
    const { bets } = props;

    const loosesCount = getLoosesCount(bets);
    const winsCount = getWinsCount(bets);
    const betsCount = getBetsCount(bets);
    const favoriteSport = getFavoriteSport(bets);
    const averageCote = getAverageCote(bets);
    const lastWin = getLastWin(bets);
    const lastLoose = getLastLoose(bets);
    const dataPieChart = [
        {
            dataKey: 'looses',
            name: 'Perdus',
            value: loosesCount,
            fill: '#d14714'
        },
        { dataKey: 'wins', name: 'Gagnés', value: winsCount, fill: '#16b20e' }
    ];

    return (
        <div className="betsHeader">
            <PageHeader title="Mes paris">
                <View styles={[STYLES.betsDetailsContainer]}>
                    <View styles={[STYLES.betDetails]}>
                        <View>
                            <p className={css(STYLES.betDetailsHeader)}>
                                Total :
                            </p>
                            <Text styles={STYLES.betDetailsItem}>
                                <span className={css(STYLES.betDetailsValue)}>
                                    {betsCount}
                                </span>{' '}
                                paris
                            </Text>
                            <Text
                                styles={STYLES.betDetailsItem}
                                style={{ color: 'green' }}
                            >
                                <span className={css(STYLES.betDetailsValue)}>
                                    {winsCount}
                                </span>{' '}
                                gagnant
                            </Text>
                            <Text
                                styles={STYLES.betDetailsItem}
                                style={{ color: 'red' }}
                            >
                                <span className={css(STYLES.betDetailsValue)}>
                                    {loosesCount}
                                </span>{' '}
                                perdant
                            </Text>
                        </View>
                        <View styles={[STYLES.divider]} />
                        <View>
                            <Text styles={STYLES.betDetailsItem}>
                                Favoris:{' '}
                                <span className={css(STYLES.betDetailsValue)}>
                                    {favoriteSport}
                                </span>
                            </Text>
                            <Text styles={STYLES.betDetailsItem}>
                                Cote moyenne:{' '}
                                <span className={css(STYLES.betDetailsValue)}>
                                    {averageCote}
                                </span>
                            </Text>
                            <Text styles={STYLES.betDetailsItem}>
                                Derniere victoire:{' '}
                                <span className={css(STYLES.betDetailsValue)}>
                                    {lastWin}
                                </span>
                            </Text>
                            <Text styles={STYLES.betDetailsItem}>
                                Derniere défaite:{' '}
                                <span className={css(STYLES.betDetailsValue)}>
                                    {lastLoose}
                                </span>
                            </Text>
                        </View>
                    </View>
                    <View styles={[STYLES.pieChartContainer]}>
                        <PieChart width={400} height={200}>
                            <Pie
                                data={dataPieChart}
                                cx={200}
                                cy={100}
                                innerRadius={40}
                                outerRadius={80}
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </View>
                </View>
            </PageHeader>
        </div>
    );
}

export default BetsHeader;
