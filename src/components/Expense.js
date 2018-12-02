import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

const Expense = (props) => (
  <div id={`expense-${props.id}`} className="expense component">
    <div className="expense-createdat">{moment(props.createdAt).format('MM/DD')}:</div>
    <div className="expense-description">{props.description}</div>
    <div className="expense-amount">{numeral(props.amount / 100).format('$0,0.00')}</div>
    <Link className="expense-edit" to={`/edit/${props.id}`}><Glyphicon glyph="pencil" /></Link>
  </div>
);

export default Expense;
