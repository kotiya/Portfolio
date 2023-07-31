import React, { useState } from 'react';

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

export default UserProfileStatusClientComponent;