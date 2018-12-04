import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';
import { startRemoveExpense } from '../actions/expensesActions';
import moment from 'moment';
import numeral from 'numeral';
import FA from 'react-fontawesome';

export class Expense extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      showConfirmModal: false,
    };

    this.onRemove = this.onRemove.bind(this);
    this.onRemoveCancel = this.onRemoveCancel.bind(this);
    this.startRemove = this.startRemove.bind(this);
  }

  onRemove = () => {
    this.setState({ showConfirmModal: true });
  };

  onRemoveCancel = () => {
    this.setState({ showConfirmModal: false });
  }

  startRemove () {
    this.props.startRemoveExpense({ id: this.props.id });
    this.setState({ showConfirmModal: false });
  }

  render () {
    return (
      <div id={`expense-${this.props.id}`} className="expense component">
        <div className="expense-wrapper">
          <div className="expense-createdat">{moment(this.props.createdAt).format('MM/DD')}:</div>
          <div className="expense-description">{this.props.description}</div>
          <div className="expense-amount">{numeral(this.props.amount / 100).format('$0,0.00')}</div>
          <Link
            to={`/edit/${this.props.id}`}
            aria-label="Edit Expense"
            title="Edit Expense"
            className="expense-edit"
          >
            <FA name="edit" />
          </Link>
          <button
            onClick={this.onRemove}
            aria-label="Remove Expense"
            title="Remove Expense"
            className="expense-remove"
          >
            <FA name="trash" />
          </button>
        </div>
        <ConfirmModal
          show={this.state.showConfirmModal}
          title='Confirm Remove'
          content='Are you sure you want to remove this expense?  This cannot be undone.'
          btnLabelOk='Yes, remove'
          handleCancel={this.onRemoveCancel}
          handleOk={this.startRemove}
        />
      </div>
    );
  }
};

// const Expense = (props) => (
//   <div id={`expense-${props.id}`} className="expense component">
//     <div className="expense-createdat">{moment(props.createdAt).format('MM/DD')}:</div>
//     <div className="expense-description">{props.description}</div>
//     <div className="expense-amount">{numeral(props.amount / 100).format('$0,0.00')}</div>
//     <Link className="expense-edit" to={`/edit/${props.id}`}><Glyphicon glyph="pencil" /></Link>
//   </div>
// );

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
})

export default connect(undefined, mapDispatchToProps)(Expense);
