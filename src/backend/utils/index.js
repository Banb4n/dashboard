import moment from 'moment';
import sports from '../db/sports';
import getCurrentCote from './getCurrentCote';

function getLoosesCount(bets) {
    const loosesBets = bets.filter(bet => bet.details.result === 'loose');

    return loosesBets.length;
}

function getWinsCount(bets) {
    const winsBets = bets.filter(bet => bet.details.result === 'win');

    return winsBets.length;
}

function getBetsCount(bets) {
    return bets.length;
}

function getFavoriteSport(bets) {
    const filteredBets = {};
    sports.forEach(sport => {
        filteredBets[sport.name] = bets.filter(bet => bet.type === sport.uid);
    });

    const filteredBetsCount = [];
    Object.keys(filteredBets).forEach(key =>
        filteredBetsCount.push(filteredBets[key].length)
    );

    const favoriteSportCount = Math.max.apply(null, filteredBetsCount);

    return Object.keys(filteredBets).filter(
        key => filteredBets[key].length === favoriteSportCount
    );
}

function getAverageCote(bets) {
    const cotes = [];
    bets.forEach(bet => {
        cotes.push(getCurrentCote(bet));
    });
    const result = cotes.reduce((acc, val) => acc + val) / cotes.length;

    return result.toFixed(2);
}

function getLastWin(bets) {
    const wins = bets.filter(bet => bet.details.result === 'win');
    return moment(wins[0].date).fromNow();
}

function getLastLoose(bets) {
    const looses = bets.filter(bet => bet.details.result === 'loose');
    return moment(looses[0].date).fromNow();
}

export {
    getLoosesCount,
    getWinsCount,
    getBetsCount,
    getFavoriteSport,
    getAverageCote,
    getLastWin,
    getLastLoose
};
