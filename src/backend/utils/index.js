import sports from '../db/sports';

function getLoosesCount(bets) {
    const loosesBets = bets.filter(bet => bet.details.result === 'loose');

    return loosesBets.length;
}

function getWinsCount(bets) {
    const loosesBets = bets.filter(bet => bet.details.result === 'win');

    return loosesBets.length;
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

    // return loosesBets.length;
}

export { getLoosesCount, getWinsCount, getBetsCount, getFavoriteSport };
