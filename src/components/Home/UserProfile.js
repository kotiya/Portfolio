import React from 'react';
import UserProfileClientComponent from './UserProfileClientComponent';

async function UserProfile() {
  const response = await fetch('/api/user');
  const user = await response.json();

  return (
    <>
      <UserProfileClientComponent user={user} />
    </>
  );
}

export default UserProfile;
