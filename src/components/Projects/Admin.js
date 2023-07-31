import React, { useState, useEffect } from 'react';

async function Admin() {
  const response = await fetch('/api/user');
  const user = await response.json();

  return (
    <>
      <AdminServerComponent user={user} />
      <AdminClientComponent user={user} />
    </>
  );
}

function AdminServerComponent({ user }) {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function AdminClientComponent({ user }) {
  const [isExtendedView, setIsExtendedView] = useState(false);

  const toggleView = () => {
    setIsExtendedView(!isExtendedView);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isExtendedView && <p>{user.extendedProfileInfo}</p>}
      <button onClick={toggleView}>Toggle View</button>
    </div>
  );
}

export default Admin;