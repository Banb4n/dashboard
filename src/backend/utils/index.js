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

export { getLoosesCount, getWinsCount, getBetsCount };
