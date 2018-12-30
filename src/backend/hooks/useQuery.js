/* @flow */
import * as React from 'react';
import { type DatabaseType } from '../types';

function useQuery(db: DatabaseType, collection: string, uid: string) {
    const [value, setValue] = React.useState('');

    React.useEffect(async () => {
        const response = await db.getData(collection, uid);
        setValue(response);
    }, []);

    return value;
}

export default useQuery;
