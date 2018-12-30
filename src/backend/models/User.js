/* @flow */
import { Record } from 'immutable';
import { type DatabaseRefType } from '../types';

type ResumeType = {
    invest: number,
    profit: number,
    looses: number,
    isPositive: boolean
};

class User extends Record({
    uid: '',
    displayName: '',
    email: '',
    bookmakers: [],
    bets: '',
    country: '',
    resume: {
        invest: 0,
        profit: 0,
        looses: 0,
        isPositive: false
    }
}) {
    uid: string;

    displayName: string;

    email: string;

    bookmakers: Array<string>;

    bets: DatabaseRefType;

    country: string;

    resume: ResumeType;

    static create(values: Object) {
        return new User({
            ...values
        });
    }

    static deserialize(json: any) {
        return new User({
            ...json
        });
    }

    serialize() {
        return {
            uid: this.uid,
            displayName: this.displayName,
            email: this.email,
            bookmakers: this.bookmakers,
            bets: this.bets,
            country: this.country,
            resume: this.resume
        };
    }
}

export default User;
