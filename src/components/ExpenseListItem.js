import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import EditPage from '../components/EditPage';
import { Link } from 'react-router-dom';

export default ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div >
);
