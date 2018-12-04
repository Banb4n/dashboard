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

    async getData(collection: string, uid: string) {
        try {
            const docRef = await this.database
                .collection(collection)
                .doc(uid)
                .get();
            console.info(`Get ${uid} in ${collection} :`, docRef);

            return docRef.data();
        } catch (error) {
            console.info(`Error when reading ${uid}: `, error);
            throw new Error(error);
        }
    }

    async addData(collection: string, data: Object) {
        try {
            const docRef = await this.database.collection(collection).add(data);
            console.log('Document written with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
            throw new Error(error);
        }
    }
}

export default Database;
