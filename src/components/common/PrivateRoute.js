/* @flow */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BackendContext } from '../../backend/context';

function PrivateRoute(routeProps: { component: React.Node }) {
    const { component: Component, ...rest } = routeProps;
    const backend = React.useContext(BackendContext);
    return (
        <Route
            {...rest}
            render={props =>
                backend.userIsLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
