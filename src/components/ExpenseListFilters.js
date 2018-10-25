import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterSortByDate, setFilterSortByAmount, setFilterStartDate, setFilterEndDate } from '../actions/filtersActions';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      calendarFocused: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onCalendarFocusChange = this.onCalendarFocusChange.bind(this);
  }

  onTextChange = (e) => {
    this.props.setFilterText(e.target.value);
  };

  onSortByChange = (e) => {
    if (e.target.value === 'date') {
      this.props.setFilterSortByDate();
    } else if (e.target.value === 'amount') {
      this.props.setFilterSortByAmount();
    }
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setFilterStartDate(startDate);
    this.props.setFilterEndDate(endDate);
  };

  onCalendarFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render () {
    return (
      <div className="expenselistfilters component">
        <input
          type="text"
          name="text"
          value={this.props.filters.text}
          onChange={this.onTextChange} />
        <select
          name="sortby"
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onCalendarFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setFilterText: (text) => dispatch(setFilterText(text)),
  setFilterSortByDate: () => dispatch(setFilterSortByDate()),
  setFilterSortByAmount: () => dispatch(setFilterSortByAmount()),
  setFilterStartDate: (startDate) => dispatch(setFilterStartDate(startDate)),
  setFilterEndDate: (endDate) => dispatch(setFilterEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
