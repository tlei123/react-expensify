import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expensesActions';

export class AddExpense extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render () {
    return (
      <div className="addexpense component">
      <h2 className="addexpense-title">Add Expense</h2>
      <ExpenseForm onSubmit={this.onSubmit}
      />
      <button className="addexpense-cancel btn caution" onClick={() => this.props.history.push('/')}>Cancel</button>
    </div>
      );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);
