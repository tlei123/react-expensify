import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, setFilterSortByDate, setFilterSortByAmount, setFilterStartDate, setFilterEndDate } from '../actions/filtersActions';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      calendarFocused: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onCalendarFocusChange = this.onCalendarFocusChange.bind(this);
  }

  onDatesChange ({startDate, endDate}) {
    this.props.dispatch(setFilterStartDate(startDate));
    this.props.dispatch(setFilterEndDate(endDate));
  }

  onCalendarFocusChange (calendarFocused) {
    this.setState(() => ({ calendarFocused }));
  }

  render () {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            props.dispatch(setFilterText(e.target.value));
          }
        } />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(setFilterSortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(setFilterSortByAmount());
            }
          }
        }>
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

const mapStateToProps = (state => {
  return {
    filters: state.filters
  };
});

export default connect(mapStateToProps)(ExpenseListFilters);
