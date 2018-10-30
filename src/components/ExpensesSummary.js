import React from 'react';
import { connect } from 'react-redux';
import { filterExpenses, selectExpensesTotals } from '../selectors/expensesSelectors';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
  <div className="expensessummary component">
    <p><span className="expensessummary-count">{props.totals.count}</span> expense(s) {props.filtered ? '(filtered) ' : ''}totalling <span className="expensessummary-amount">{numeral(props.totals.amount /100).format('$0,0.00')}</span></p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    totals: selectExpensesTotals(filterExpenses(state.expenses, state.filters)),
    filtered: (!!state.filters.text || !!state.filters.startDate || !!state.filters.endDate)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
