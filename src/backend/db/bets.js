import sports from './sports';

const bets = {
    user1: [
        {
            uid: 'bet1',
            bookmaker: 'zebet',
            type: sports[1].uid,
            date: '12 novembre 2018 12:00',
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.5,
                coteN: null,
                cote2: 1.1,
                amount: 100,
                choice: 0,
                finish: true,
                result: 'win',
                profit: 50
            }
        },
        {
            uid: 'bet2',
            bookmaker: 'zebet',
            type: sports[0].uid,
            date: '12 novembre 2018 12:00',
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.6,
                coteN: 2.1,
                cote2: 1.9,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        }
    ],
    user2: [
        {
            uid: 'bet1',
            bookmaker: 'betclic',
            type: sports[0].uid,
            date: '14 novembre 2018 19:58',
            details: {
                team1: 'Real Madrid',
                team2: 'PSG',
                cote1: 2.2,
                coteN: 3.7,
                cote2: 2.1,
                amount: 50,
                choice: 1,
                finish: true,
                result: 'loose',
                profit: 0
            }
        },
        {
            uid: 'bet2',
            bookmaker: 'zebet',
            type: sports[1].uid,
            date: '12 novembre 2018 17:58',
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.5,
                coteN: null,
                cote2: 1.1,
                amount: 100,
                choice: 0,
                finish: true,
                result: 'win',
                profit: 50
            }
        },
        {
            uid: 'bet3',
            bookmaker: 'zebet',
            type: sports[0].uid,
            date: '12 novembre 2018 12:00',
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.6,
                coteN: 2.1,
                cote2: 1.9,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        },
        {
            uid: 'bet4',
            bookmaker: 'betclic',
            type: sports[0].uid,
            date: '8 novembre 2018 11:58',
            details: {
                team1: 'Real Madrid',
                team2: 'PSG',
                cote1: 2.2,
                coteN: 3.7,
                cote2: 2.1,
                amount: 50,
                choice: 1,
                finish: true,
                result: 'loose',
                profit: 0
            }
        },
        {
            uid: 'bet5',
            bookmaker: 'zebet',
            type: sports[1].uid,
            date: '10 octobre 2018 19:59',
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.5,
                coteN: null,
                cote2: 1.1,
                amount: 100,
                choice: 0,
                finish: true,
                result: 'win',
                profit: 50
            }
        },
        {
            uid: 'bet6',
            bookmaker: 'zebet',
            type: sports[0].uid,
            date: '6 octobre 2018 19:08',
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.6,
                coteN: 2.1,
                cote2: 1.9,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        },
        {
            uid: 'bet7',
            bookmaker: 'betclic',
            type: sports[0].uid,
            date: '22 septembre 2018 20:58',
            details: {
                team1: 'Real Madrid',
                team2: 'PSG',
                cote1: 2.2,
                coteN: 3.7,
                cote2: 2.1,
                amount: 50,
                choice: 1,
                finish: true,
                result: 'loose',
                profit: 0
            }
        },
        {
            uid: 'bet8',
            bookmaker: 'zebet',
            type: sports[1].uid,
            date: '10 septembre 2018 19:58',
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.5,
                coteN: null,
                cote2: 1.1,
                amount: 100,
                choice: 0,
                finish: true,
                result: 'win',
                profit: 50
            }
        },
        {
            uid: 'bet9',
            bookmaker: 'zebet',
            type: sports[0].uid,
            date: '1 septembre 2018 19:58',
            details: {
                team1: 'titi',
                team2: 'OL',
                cote1: 1.6,
                coteN: 2.1,
                cote2: 1.9,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        },
        {
            uid: 'bet10',
            bookmaker: 'betclic',
            type: sports[0].uid,
            date: '31 april 2018 19:58',
            details: {
                team1: 'Real Madrid',
                team2: 'PSG',
                cote1: 2.2,
                coteN: 3.7,
                cote2: 2.1,
                amount: 50,
                choice: 1,
                finish: true,
                result: 'loose',
                profit: 0
            }
        },
        {
            uid: 'bet11',
            bookmaker: 'zebet',
            type: sports[1].uid,
            date: '9 mars 2017 20:58',
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.5,
                coteN: null,
                cote2: 1.1,
                amount: 100,
                choice: 0,
                finish: true,
                result: 'win',
                profit: 50
            }
        },
        {
            uid: 'bet12',
            bookmaker: 'zebet',
            type: sports[0].uid,
            date: '10 janvier 2016 20:58',
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.6,
                coteN: 2.1,
                cote2: 1.9,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        }
    ]
};

export default bets;
