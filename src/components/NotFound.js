import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>404 -- Not Found</h2>
    <p>Sorry!  The resource you requested was not found.</p>
    <p>Go back to <Link to="/">Dashboard</Link>.</p>
  </div>
);

export default NotFound;