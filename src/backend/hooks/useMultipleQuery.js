/* @flow */
import * as React from 'react';
import { type DatabaseType } from '../types';

function useMultipleQuery(db: DatabaseType, collectionQueries: Array<*>) {
    const [value, setValue] = React.useState([]);
    React.useEffect(async () => {
        const results = [];
        collectionQueries.forEach(async query => {
            const response = await db.getData(query.collection, query.uid);
            results.push(response);
        });
        setValue(results);
    }, []);

    return value;
}

export default useMultipleQuery;
