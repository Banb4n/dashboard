/* @flow */
import * as React from 'react';

function useCurrentUser(app: any) {
    const [user, setUser] = React.useState({});

    React.useEffect(
        () => {
            console.log(app.auth().currentUser);
            setUser(app.auth().currentUser);
        },
        [app.auth().currentUser]
    );

    return user;
}

export default useCurrentUser;
