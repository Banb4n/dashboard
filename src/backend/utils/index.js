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

/**
 *
 * TO DO: finish this algo
 */
function getFavoriteSport(bets) {
    const filteredBets = {};
    sports.forEach(sport => {
        filteredBets[sport.name] = bets.filter(bet => bet.type === sport.uid);
    });
    console.log({ test: filteredBets.football });

    const filteredBetsCount = [];
    Object.keys(filteredBets, key =>
        filteredBetsCount.push(filteredBets[key].length)
    );
    // const result = filteredBets.map(item => item.values().length);
    const maxCountSport = Math.max.apply(null, filteredBetsCount);
    console.log({ maxCountSport });

    Object.keys(filteredBets, key => {
        console.log({ key });
        // if (value.length === maxCountSport) {
        //     console.log({ value });
        //     // return sports[item.name];
        // }
    });

    // return loosesBets.length;
}

export { getLoosesCount, getWinsCount, getBetsCount, getFavoriteSport };
