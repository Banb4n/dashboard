function getLooses(bets) {
    const loosesList = [];

    const loosesBets = bets.filter(bet => bet.details.result === 'loose');
    console.log({  loosesBets })

    loosesBets.forEach(bet => {
        const { amount } = bet.details;
        loosesList.push(amount);

    });
    return loosesList.reduce((acc, val) => acc + val);
}

export default getLooses;