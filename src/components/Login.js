import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook, startLoginTwitter, startLoginGithub } from '../actions/authActions';

export const Login = (props) => (
  <div className="login component">
    <h1 className="login-title">React-Expensify</h1>
    <p className="login-byline">by <a href="http://tze1.com/" title="Tze-chiu Lei's portfolio site" target="_blank">Tze-chiu Lei</a></p>
    <p className="login-preamble"><span className="highlight">DEMO for TESTING ONLY</span>: INPUT ONLY IMAGINARY EXPENSES!  Do NOT use this as your real expense-tracker.</p>
    <p className="login-instructions">Please log in to your expenses:</p>
    <div className="login-btns">
      <button className="login-btn btn third-party google" onClick={props.startLoginGoogle} title="Log in with Google">Login with Google</button>
          <button className="login-btn btn third-party facebook" onClick={props.startLoginFacebook} title="Log in with Facebook">Continue with Facebook</button>
      <button className="login-btn btn third-party twitter" onClick={props.startLoginTwitter} title="Log in with Twitter">Login with Twitter</button>
      <button className="login-btn btn third-party github" onClick={props.startLoginGithub} title="Log in with GitHub">Login with GitHub</button>
  </div>
    <p className="login-credits">This DEMO app uses <a href="https://firebase.google.com/" target="_blank">Google Firebase</a> Authentication & Databases.<br />NOTE: If testing different sign-in providers, beware that each creates a separate account.  OAuth accounts-linking is beyond the scope of this demo.</p>
    <p className="login-appinfo">See source-code and unit-tests in the <a href="https://github.com/tlei123/react-expensify" target="_blank">GitHub project</a>.</p>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => { dispatch(startLoginGoogle()) },
  startLoginFacebook: () => { dispatch(startLoginFacebook()) },
  startLoginTwitter: () => { dispatch(startLoginTwitter()) },
  startLoginGithub: () => { dispatch(startLoginGithub()) }
});

export default connect(undefined, mapDispatchToProps)(Login);
