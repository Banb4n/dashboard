/* @flow */
import { key } from 'firebase-key';

/*
 * Generate a key for the database.
 */
function genKey(): string {
    return key();
}

export default genKey;
