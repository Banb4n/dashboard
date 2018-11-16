/* @flow */
export type DatabaseType = any;

class Database {
    database: DatabaseType;

    constructor(db: DatabaseType) {
        // Initialize Cloud Firestore through Firebase
        this.database = db;
        // Disable deprecated features
        this.database.settings({
            timestampsInSnapshots: true
        });
    }

    async addData(collection: string, data: Object) {
        try {
            const docRef = await this.database.collection(collection).add(data);
            console.log('Document written with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }
}

export default Database;
