/* @flow */
import * as React from 'react';

function useCurrentUser(app: any) {
    const [user, setUser] = React.useState(null);

    React.useEffect(
        () => {
            console.log({
                current: app.auth().currentUser,
                app,
                auth: app.auth()
            });
            setUser(app.auth().currentUser);
        },
        [app.auth().currentUser]
    );

    return user;
}

export default useCurrentUser;
