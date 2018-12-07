import React from 'react';
import { connect } from 'react-redux';
import { filterExpenses, selectExpensesTotals } from '../selectors/expensesSelectors';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
  <div className="expensessummary component">
    <p>
      <span className="expensessummary-count">{props.totals.count}</span> expense(s) {props.hiddenCount ? '(filtered) ' : ''}totalling <span className="expensessummary-amount">{numeral(props.totals.amount /100).format('$0,0.00')}</span>
      {props.hiddenCount &&
        <span className="hiddenCountSpan">&nbsp;[{props.hiddenCount} hidden]</span>
      }
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const filteredExpenses = filterExpenses(state.expenses, state.filters);

  return {
    totals: selectExpensesTotals(filteredExpenses),
    hiddenCount: state.expenses.length - filteredExpenses.length,
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
