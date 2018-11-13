/* @flow */
import React, { useState } from 'react';
import { Subscribe } from 'unstated';
import AppContainer from '../../../containers/AppContainer';

function UserProfile(props: { user: Object }) {
    const { user } = props;

    return <div className="userProfile">{user.displayName}</div>;
}

const UserProfileConnected = (props: any) => (
    <Subscribe to={[AppContainer]}>
        {appContainer => (
            <UserProfile user={appContainer.state.user} {...props} />
        )}
    </Subscribe>
);

export default UserProfileConnected;
