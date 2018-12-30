/* @flow */
import firebase from 'firebase';
import Database from './db/Database';
import type { AppType, DatabaseType } from './types';
import config from '../config/config';

class Backend {
    // Firestore database
    database: DatabaseType;

    // Firebase app
    app: AppType;

    constructor() {
        this.app = firebase.initializeApp(config.firebase);
        this.database = new Database(this.app.firestore());
    }

    get userIsLoggedIn() {
        return !!this.app.auth().currentUser;
    }
}

export default Backend;
