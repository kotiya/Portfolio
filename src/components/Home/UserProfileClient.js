import React, { useState, useEffect } from 'react';

const UserProfileClient = () => {
  const [user, setUser] = useState(null);
  const [isExtendedView, setIsExtendedView] = useState(false);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  const toggleView = () => {
    setIsExtendedView(!isExtendedView);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {isExtendedView && <p>{user.extendedProfileInfo}</p>}
      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
};

export default UserProfileClient;
