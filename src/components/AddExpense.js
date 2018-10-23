import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expensesActions';

const AddExpense = (props) => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm onSubmit={(expense) => {
        props.startAddExpense(expense);
        props.history.push('/');
      }}
    />
    <button onClick={() => props.history.push('/')}>Cancel</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
