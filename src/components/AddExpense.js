import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActions';

const AddExpense = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
    <button onClick={() => props.history.push('/')}>Cancel</button>
  </div>
);

export default connect()(AddExpense);
