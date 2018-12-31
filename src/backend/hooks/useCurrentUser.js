/* @flow */
import * as React from 'react';

function useCurrentUser(app: any) {
    const [user, setUser] = React.useState(null);

    React.useEffect(
        () => {
            console.info(app.auth().currentUser);
            setUser(app.auth().currentUser);
        },
        [app.auth().currentUser]
    );

    return user;
}

export default useCurrentUser;
