import React, { useState, useEffect } from 'react';
import AdminClientComponent from './AdminClientComponent';

async function Admin() {
  const response = await fetch('/api/user');
  const user = await response.json();

  return <AdminClientComponent user={user} />;
}

export default Admin;
