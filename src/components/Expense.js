import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = (props) => (
  <div id={`expense-${props.id}`} className="expense component">
    <span className="expense-createdat">{moment(props.createdAt).format('MM/DD/YYYY')}:</span>&nbsp;
    <span className="expense-description">{props.description}</span>&nbsp;
    <span className="expense-amount">{numeral(props.amount / 100).format('$0,0.00')}</span>&nbsp;
    <Link className="expense-edit" to={`/edit/${props.id}`}>Edit</Link>
  </div>
);

export default Expense;
