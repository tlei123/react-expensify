import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = (props) => (
  <div className="login component">
    <h1 className="login-title">React-Expensify</h1>
    <p className="login-preamble"><span className="highlight">DEMO for TESTING ONLY</span>: INPUT ONLY IMAGINARY EXPENSES!  Do NOT use this as your real expense-tracker.</p>
    <p className="login-instructions">Please log in to your expenses:</p>
    <button className="login-btn btn third-party google" onClick={props.startLogin} title="Log in with Google"></button>
    <p className="login-credits">This DEMO app uses <a href="https://firebase.google.com/" target="_blank">Google Firebase</a> Authentication & Databases.</p>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => { dispatch(startLogin()) }
});

export default connect(undefined, mapDispatchToProps)(Login);
