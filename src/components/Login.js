import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = (props) => (
  <div className="login component">
    <h1 className="login-title">React-Expensify</h1>
    <button className="login-btn" onClick={props.startLogin}>Log in</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => { dispatch(startLogin()) }
});

export default connect(undefined, mapDispatchToProps)(Login);
