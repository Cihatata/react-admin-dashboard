import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashnoard() {
  return (
    <div>
      <h1> Dashboard </h1>
      <Link to="/userlist"> UserList </Link>
    </div>
  );
}
