import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ConfirmModal from './ConfirmModal';
import { startEditExpense, startRemoveExpense } from '../actions/expensesActions';

export class EditExpense extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showConfirmModal: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.handleRemoveCancel = this.handleRemoveCancel.bind(this);
    this.startRemove = this.startRemove.bind(this);
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.setState({ showConfirmModal: true });
  };

  handleRemoveCancel = () => {
    this.setState({ showConfirmModal: false });
  }

  startRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.setState({ showConfirmModal: false });
    this.props.history.push('/');
  }

  render () {
    return (
      <div className="editexpense component">
        <h2 className="editexpense-title">Edit Expense</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <div className="editexpense-actions">
          <button className="editexpense-cancel button exit" onClick={() => this.props.history.push('/')}>Cancel</button>&nbsp;
          <button className="editexpense-remove button caution" onClick={this.onRemove}>Remove Expense</button>
        </div>
        <ConfirmModal
          show={this.state.showConfirmModal}
          title='Confirm Remove'
          content='Are you sure you want to remove this expense?  This cannot be undone.'
          btnLabelOk='Yes, remove'
          handleCancel={this.handleRemoveCancel}
          handleOk={this.startRemove}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(item => item.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);