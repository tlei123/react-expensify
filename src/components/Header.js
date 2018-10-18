import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink> |&nbsp;
      <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink> |&nbsp;
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  </header>
);

export default Header;
