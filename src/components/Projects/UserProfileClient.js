import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <UserProfileClient user={user} />
  );
};

export default UserProfile;

function UserProfileClient({ user }) {
  const [isExtendedView, setIsExtendedView] = useState(false);

  const toggleView = () => {
    setIsExtendedView(!isExtendedView);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {isExtendedView && <p>{user.extendedProfileInfo}</p>}
      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
}
