/* @flow */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BackendContext } from '../../backend/context';

function PrivateRoute(routeProps: { component: React.Node }) {
    const { component: Component, ...rest } = routeProps;
    const backend = React.useContext(BackendContext);
    const { isLoggedIn } = backend;
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
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
