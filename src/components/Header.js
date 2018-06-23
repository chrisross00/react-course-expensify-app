import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add an Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help and FAQs</NavLink>
  </header>
);

export default Header;
