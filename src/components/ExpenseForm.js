import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      calendarFocused: false,
      errorMessage: '',
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onCalendarFocusChange = this.onCalendarFocusChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDescriptionChange (e) {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange (e) {
    const amount = e.target.value,
      amtRegex = /^\d{1,}(\.\d{0,2})?$/;
    if (!amount || amount.match(amtRegex)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange (createdAt) {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }
  onCalendarFocusChange ({ focused }) {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onNoteChange (e) {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onSubmit (e) {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error message.
      this.setState(() => ({ errorMessage: 'ERROR: Missing description or amount.' }));
    } else {
      this.setState(() => ({ errorMessage: '' }));
      this.props.onSubmit({
        createdAt: this.state.createdAt.valueOf(),
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
      });
    }
  }

  render () {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note.  (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type="submit">{this.props.expense ? 'Update' : 'Add'} Expense</button>
        </form>
      </div>
    );
  }
};
