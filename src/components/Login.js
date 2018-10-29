import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/authActions';

export const Login = (props) => (
  <div className="login component">
    <button className="login-btn" onClick={props.startLogin}>Log in</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => { dispatch(startLogin()) }
});

export default connect(undefined, mapDispatchToProps)(Login);
