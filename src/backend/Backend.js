/* @flow */
import firebase from 'firebase';
import Database, { type DatabaseType } from './db/Database';
import config from '../config/config';

export type App = any;
export type BackendType = {
    database: DatabaseType,
    app: App
};

class Backend {
    // Firestore database
    database: DatabaseType;

    // Firebase app
    app: App;

    constructor() {
        this.app = firebase.initializeApp(config.firebase);
        this.database = new Database(this.app.firestore());
    }

    get userIsLoggedIn() {
        return !!this.app.auth().currentUser;
    }
}

export default Backend;
