import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>404 -- Not Found</h2>
    <p>Sorry!  The resource you requested was not found.</p>
    <p>You can go to <Link to="/">Expense Dashboard</Link>.</p>
  </div>
);

export default NotFound;
