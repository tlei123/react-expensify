import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook, startLoginTwitter, startLoginGithub } from '../actions/authActions';

export const Login = (props) => (
  <div className="login component">
    <h1 className="login-title">React-Expensify</h1>
    <p className="login-preamble"><span className="highlight">DEMO for TESTING ONLY</span>: INPUT ONLY IMAGINARY EXPENSES!  Do NOT use this as your real expense-tracker.</p>
    <p className="login-instructions">Please log in to your expenses:</p>
    <button className="login-btn btn third-party google" onClick={props.startLoginGoogle} title="Log in with Google">Login with Google</button>
    <button className="login-btn btn third-party facebook" onClick={props.startLoginFacebook} title="Log in with Facebook">Continue with Facebook</button>
    <button className="login-btn btn third-party twitter" onClick={props.startLoginTwitter} title="Log in with Twitter">Login with Twitter</button>
    <button className="login-btn btn third-party github" onClick={props.startLoginGithub} title="Log in with GitHub">Login with GitHub</button>
    <p className="login-credits">This DEMO app uses <a href="https://firebase.google.com/" target="_blank">Google Firebase</a> Authentication & Databases.</p>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => { dispatch(startLoginGoogle()) },
  startLoginFacebook: () => { dispatch(startLoginFacebook()) },
  startLoginTwitter: () => { dispatch(startLoginTwitter()) },
  startLoginGithub: () => { dispatch(startLoginGithub()) }
});

export default connect(undefined, mapDispatchToProps)(Login);
