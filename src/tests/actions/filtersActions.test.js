import moment from 'moment';
import {
  setFilterText,
  setFilterSortByAmount,
  setFilterSortByDate,
  setFilterStartDate,
  setFilterEndDate
} from '../../actions/filtersActions';

test('Should generate set-text action-object with provided value', () => {
  const textVal = 'test',
    actionObj = setFilterText(textVal);

  expect(actionObj).toEqual({
    type: 'SET_FILTER_TEXT',
    text: textVal
  });
});

test('Should generate set-filter-text action-object with no provided value', () => {
  const actionObj = setFilterText();

  expect(actionObj).toEqual({
    type: 'SET_FILTER_TEXT',
    text: ''
  });
});

test('Should generate set-filter-sortby-amount action-object', () => {
  const actionObj = setFilterSortByAmount();

  expect(actionObj).toEqual({
    type: 'SET_FILTER_SORTBY',
    sortBy: 'amount'
  });
});

test('Should generate set-filter-sortby-date action-object', () => {
  const actionObj = setFilterSortByDate();

  expect(actionObj).toEqual({
    type: 'SET_FILTER_SORTBY',
    sortBy: 'date'
  });
});

test('Should generate set-start-date action-object', () => {
  const actionObj = setFilterStartDate(moment(0));

  expect(actionObj).toEqual({
    type: 'SET_FILTER_STARTDATE',
    date: moment(0)
  });
});

test('Should generate set-end-date action-object', () => {
  const actionObj = setFilterEndDate(moment(1540329165699));

  expect(actionObj).toEqual({
    type: 'SET_FILTER_ENDDATE',
    date: moment(1540329165699)
  });
});
