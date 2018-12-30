/* @flow */
import bets from './bets';

const users = [
    {
        uid: 'user1',
        displayName: 'alban suchaire',
        bookmakers: ['zebet'],
        country: 'FR',
        bets: bets.user1,
        resume: {
            invest: 100,
            profit: 50,
            looses: 0,
            isPositive: true
        }
    },
    {
        uid: 'user2',
        displayName: 'agathe roseren',
        bookmakers: ['zebet', 'unibet', 'betclic'],
        bets: bets.user2,
        country: 'CH',
        resume: {
            invest: 50,
            profit: 0,
            looses: 50,
            isPositive: false
        }
    }
];

export default users;
