/* @flow */

class Bets {
    uid: string;

    bookmaker: string;

    type: string;

    date: Date;

    team1: string;

    team2: string;

    cote1: number;

    coteN: number | null;

    cote2: number;

    amount: number;

    // 1 | N | 2
    choice: 1 | 0 | 2;

    result: 'win' | 'loose';

    profit: number;
}

export default Bets;
