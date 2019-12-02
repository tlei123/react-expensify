import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

describe('filtersReducer', () => {
  it('Should set up default filter values', () => {
    const newState = filtersReducer(undefined, { type: '@@INIT' });

    expect(newState).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().subtract(30, 'days'),
      endDate: undefined
    });
  });

  it('Should set filter-text to provided value', () => {
    const newState = filtersReducer(undefined, { type: 'SET_FILTER_TEXT', text: 'e'});

    expect(newState.text).toBe('e');
  });

  it('Should set filter-startDate to provided value', () => {
    const testStartDate = moment(0),
      newState = filtersReducer(undefined, { type: 'SET_FILTER_STARTDATE', date: testStartDate });

    expect(newState.startDate).toBe(testStartDate);
  });

  it('Should set filter-endDate to provided value', () => {
    const testEndDate = moment().endOf('month').add(2, 'days'),
      newState = filtersReducer(undefined, { type: 'SET_FILTER_ENDDATE', date: testEndDate });

    expect(newState.endDate).toBe(testEndDate);
  });

  it('Should set filter-sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
      },
      action = { type: 'SET_FILTER_SORTBY', sortBy: 'date' },
      newState = filtersReducer(currentState, action);

    expect(newState.sortBy).toBe('date');
  });

  it('Should set filter-sortBy to amount', () => {
    const newState = filtersReducer(undefined, { type: 'SET_FILTER_SORTBY', sortBy: 'amount'});

    expect(newState.sortBy).toBe('amount');
  });
});
