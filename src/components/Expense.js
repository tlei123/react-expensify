import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Expense = (props) => (
  <div id={`expense-${props.id}`} className="expense component">
    <span>{moment(props.createdAt).format('MM/DD/YYYY')}:</span>&nbsp;
    <span>{props.description}</span>&nbsp;
    <span>{numeral(props.amount / 100).format('$0,0.00')}</span>&nbsp;
    <Link to={`/edit/${props.id}`}>Edit</Link>
  </div>
);

export default Expense;
