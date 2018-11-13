function getProfit(bets) {
    const profitList = [];

    bets.forEach(bet => {
        const { profit } = bet.details;
        if (profit) {
            profitList.push(profit);
        } else {
            profitList.push(0);
        }
    });
    return profitList.reduce((acc, val) => acc + val);
}

export default getProfit;
