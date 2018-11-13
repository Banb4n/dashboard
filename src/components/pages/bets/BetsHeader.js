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
    getBetsCount,
    getFavoriteSport
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
        borderRadius: 2,
        padding: `${spacing.S100}px ${spacing.S100}px`,
        display: 'flex',
        justifyContent: 'space-between'
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
        paddingLeft: spacing.S100,
        marginLeft: spacing.S200,
        fontSize: 16,
        fontFamilly: 'Open Sans, sans-serif',
        color: 'dimgrey'
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
        fontWeight: 700,
        fontSize: 17,
        color: 'black'
    },
    divider: {
        width: 1,
        background: 'dimgrey',
        display: 'flex',
        margin: 16,
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
    }
});

function BetsHeader(props: { bets: Object }) {
    const { bets } = props;

    const loosesCount = getLoosesCount(bets);
    const winsCount = getWinsCount(bets);
    const betsCount = getBetsCount(bets);

    console.log(getFavoriteSport(bets));

    return (
        <div className="betsHeader">
            <View styles={STYLES.betsHeader}>
                <h1 className={css(STYLES.pageTitle)}>Mes paris</h1>
                <View styles={STYLES.betsDetailsContainer}>
                    <View styles={STYLES.betDetails}>
                        <View>
                            <p className={css(STYLES.betDetailsHeader)}>
                                Total :
                            </p>
                            <p
                                className={css(
                                    STYLES.betDetailsItem,
                                    STYLES.betItemPrimary
                                )}
                            >
                                <span className={css(STYLES.betDetailsValue)}>
                                    {betsCount}
                                </span>{' '}
                                paris
                            </p>
                            <p
                                className={css(STYLES.betDetailsItem)}
                                style={{ color: 'green' }}
                            >
                                <span
                                    className={css(
                                        STYLES.betDetailsValue,
                                        STYLES.betItemSecondary
                                    )}
                                >
                                    {winsCount}
                                </span>{' '}
                                gagnant
                            </p>
                            <p
                                className={css(STYLES.betDetailsItem)}
                                style={{ color: 'red' }}
                            >
                                <span
                                    className={css(
                                        STYLES.betDetailsValue,
                                        STYLES.betItemSecondary
                                    )}
                                >
                                    {loosesCount}
                                </span>{' '}
                                perdant
                            </p>
                        </View>
                        <View styles={STYLES.divider} />
                        <View>
                            <p className={css(STYLES.betDetailsItem)}>
                                <span className={css(STYLES.betDetailsValue)}>
                                    {betsCount}
                                </span>{' '}
                                paris
                            </p>
                        </View>
                    </View>
                    <View styles={STYLES.STATS}>STATS</View>
                </View>
            </View>
        </div>
    );
}

export default BetsHeader;
