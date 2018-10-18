import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expensesActions';

const EditExpense = (props) => {
  return (
    <div>
    <h2>Edit Expense</h2>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }} />
        <div>
        <button onClick={() => props.history.push('/')}>Cancel</button>&nbsp;
        <button onClick={() => {
          props.dispatch(removeExpense({id: props.expense.id}));
          props.history.push('/');
        }}>Remove Expense</button>
        </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(item => item.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpense);