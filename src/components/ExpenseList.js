import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import { filterExpenses } from '../selectors/expensesSelectors';

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.map((expense, index) => {
      return <Expense key={index} {...expense} />;
    })}
  </div>
);

// Export connected component
const mapStateToProps = (state, props) => {
  return {
    expenses: filterExpenses(state.expenses, state.filters)
  }
};
export default connect(mapStateToProps)(ExpenseList);
