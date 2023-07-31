import React from 'react';

async function UserProfile() {
  const response = await fetch('/api/user');
  const user = await response.json();

  return <UserProfileClientComponent user={user} />;
}

export default UserProfile;
