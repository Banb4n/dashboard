import moment from 'moment';
import sports from './sports';

const bets = {
    user1: [
        {
            uid: 'bet1',
            bookmaker: 'zebet',
            type: [sports[1].name],
            date: moment().format('L'),
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.50,
                coteN: null,
                cote2: 1.10,
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
            type: [sports[0].name],
            date: moment().format('L'),
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.60,
                coteN: 2.10,
                cote2: 1.90,
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
            type: [sports[0].name],
            date: moment().format('L'),
            details: {
                team1: 'Real Madrid',
                team2: 'PSG',
                cote1: 2.20,
                coteN: 3.70,
                cote2: 2.10,
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
            type: [sports[1].name],
            date: moment().format('L'),
            details: {
                team1: 'G. Monfils',
                team2: 'R. Federer',
                cote1: 1.50,
                coteN: null,
                cote2: 1.10,
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
            type: [sports[0].name],
            date: moment().format('L'),
            details: {
                team1: 'Marseille',
                team2: 'OL',
                cote1: 1.60,
                coteN: 2.10,
                cote2: 1.90,
                amount: 1000,
                choice: 1,
                finish: true,
                result: 'win',
                profit: 900
            }
        }
    ]
}

export default bets;