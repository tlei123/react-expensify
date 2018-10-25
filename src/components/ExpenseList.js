import React from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import { filterExpenses } from '../selectors/expensesSelectors';

export const ExpenseList = (props) => (
  <div className="expenselist component">
    {props.expenses.length === 0 ?
      (
        <p className="expenselist-empty">[no expenses found]</p>
      ) :
      (
        props.expenses.map((expense) => {
          return <Expense key={expense.id} {...expense} />;
        })
      )
    }
  </div>
);

// Export connected component
const mapStateToProps = (state, props) => {
  return {
    expenses: filterExpenses(state.expenses, state.filters)
  }
};
export default connect(mapStateToProps)(ExpenseList);
