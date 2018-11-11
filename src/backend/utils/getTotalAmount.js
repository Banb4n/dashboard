function getTotalAmout(bets) {
    const amountsList = [];

    bets.forEach(bet => {
        const { amount } = bet.details;
        amountsList.push(amount);
    });
    return amountsList.reduce((acc, val) => acc + val);
}

export default getTotalAmout;