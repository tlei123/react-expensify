import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/authActions';
import { NavLink } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import DismissableAlert from './DismissableAlert';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export const Header = (props) => (
  <div className="header component">
    <header>
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
        <button className="header-auth-btn logout" onClick={props.startLogout}><Glyphicon glyph="log-out" /></button>
      </div>
    </header>

    <DismissableAlert />
  </div>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => { dispatch(startLogout()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
