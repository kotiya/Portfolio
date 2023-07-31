import React, { useState } from 'react';

const AdminClientComponent = ({ user }) => {
  const [isExtendedView, setIsExtendedView] = useState(false);

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

export default AdminClientComponent;
```