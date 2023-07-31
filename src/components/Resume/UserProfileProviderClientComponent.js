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

export default UserProfileProviderClientComponent;