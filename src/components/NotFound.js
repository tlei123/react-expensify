import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const NotFound = (props) => (
  <div>
    <h2>404 -- Not Found</h2>
    <p>Sorry!  The resource you requested was not found.</p>
    {props.isAuthenticated ?
      <p>You can go to <Link to="/dashboard">Expense Dashboard</Link>.</p> :
      <p>You can go to <Link to="/">Login</Link>.</p>
    }
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: typeof state.auth.user !== undefined
});

export default connect(mapStateToProps, undefined)(NotFound);
