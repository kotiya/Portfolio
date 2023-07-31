import React from 'react';
import UserProfileProviderClientComponent from './UserProfileProviderClientComponent';
import UserProfileStatusClientComponent from './UserProfileStatusClientComponent';

const UserProfileClientComponent = ({ userId }) => {
  return (
    <UserProfileProviderClientComponent userId={userId}>
      <UserContext.Consumer>
        {user => (
          <div>
            <h1>{user ? user.name : 'Loading...'}</h1>
            <UserProfileStatusClientComponent />
          </div>
        )}
      </UserContext.Consumer>
    </UserProfileProviderClientComponent>
  );
};

export default UserProfileClientComponent;
