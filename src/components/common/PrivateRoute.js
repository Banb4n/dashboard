/* @flow */
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(routeProps: { component: React.Node, user: any }) {
    const { component: Component, user, ...rest } = routeProps;
    console.log({ user });
    const isLoggedIn = user;
    return (
        <Route
            {...rest}
            render={props => {
                console.log({ props, isLoggedIn });
                return isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateRoute;
