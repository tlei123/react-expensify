// Filters reducer
import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return { ...state, text: action.text };
    case 'SET_FILTER_STARTDATE':
      return { ...state, startDate: action.date };
    case 'SET_FILTER_ENDDATE':
      return { ...state, endDate: action.date };
    case 'SET_FILTER_SORTBY':
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};

export default filtersReducer;
