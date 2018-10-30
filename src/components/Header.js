import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header component">
    <h1 className="header-title">React-Expensify</h1>
    <div className="header-nav">
      <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink> |&nbsp;
      <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink> |&nbsp;
    </div>
  </header>
);

export default Header;
