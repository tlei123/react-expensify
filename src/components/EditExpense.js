import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expensesActions';

export class EditExpense extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  render () {
    return (
      <div className="editexpense component">
        <h2 className="editexpense-title">Edit Expense</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <div className="editexpense-actions">
          <button className="editexpense-cancel button exit" onClick={() => this.props.history.replace('/')}>Cancel</button>&nbsp;
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(item => item.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);