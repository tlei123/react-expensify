import React from 'react';
import { Link } from 'react-router-dom';

const Expense = (props) => (
  <div id={`expense-${props.id}`} className="expense component">
    <span>{props.createdAt}:</span>&nbsp;
    <span>{props.description}</span>&nbsp;
    <span>{props.amount}</span>&nbsp;
    <Link to={`/edit/${props.id}`}>Edit</Link>
  </div>
);

export default Expense;
