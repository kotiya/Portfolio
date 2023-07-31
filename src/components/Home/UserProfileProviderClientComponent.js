import React, { useState, useEffect } from 'react';

const UserProfileProviderClientComponent = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

const UserProfileStatusClientComponent = () => {
  const [status, setStatus] = useState('active');

  const changeStatus = () => {
    setStatus(status === 'active' ? 'inactive' : 'active');
  };

  return (
    <button onClick={changeStatus}>
      Set status to {status === 'active' ? 'inactive' : 'active'}
    </button>
  );
};

const UserProfile = ({ userId }) => {
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

export default UserProfile;