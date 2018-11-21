import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { NavLink } from 'react-router-dom';

export const Header = (props) => (
  <header className="header component">
    <h1 className="header-title">React-Expensify</h1>
    <div className="header-nav">
      <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink> |&nbsp;
      <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
    </div>
    <div className="header-auth">
      <span className="header-auth-username">{props.auth.displayName}</span>
      {props.auth.photoURL &&
        <img className="header-auth-avatar" src={props.auth.photoURL} />
      }
      <button className="header-auth-btn button exit" onClick={props.startLogout}>Log out</button>
    </div>
  </header>
);

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => { dispatch(startLogout()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
