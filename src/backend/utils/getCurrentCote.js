function getCurrentCote(choice: 0 | 1 | 2) {
    switch(choice) {
        case 1:
            return 'coteN';
        case 3:
            return 'cote2';
        default:
            return 'cote1';
    }
}

export default getCurrentCote;