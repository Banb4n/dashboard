function getCurrentCote(bet: Object) {
    switch (bet.choice) {
        case 1:
            return bet.details.coteN;
        case 3:
            return bet.details.cote2;
        default:
            return bet.details.cote1;
    }
}

export default getCurrentCote;
