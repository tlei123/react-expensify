import moment from 'moment';
import { filterExpenses } from '../../selectors/expensesSelectors';
import testExpenses from '../fixtures/testExpenses.js';

describe('expenseSelectors', () => {
  it('Should filter by text value', () => {
    const testFilters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
      },
      filteredExpenses = filterExpenses(testExpenses, testFilters);

    expect(filteredExpenses).toEqual([ testExpenses[2], testExpenses[1] ]);
  });

  it('Should filter by start-date', () => {
    const testFilters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
      },
      filteredExpenses = filterExpenses(testExpenses, testFilters);

    expect(filteredExpenses).toEqual([ testExpenses[2], testExpenses[0] ]);
  });

  it('Should filter by end-date', () => {
    const testFilters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0)
    },
    filteredExpenses = filterExpenses(testExpenses, testFilters);

    expect(filteredExpenses).toEqual([ testExpenses[0], testExpenses[1] ]);
  });

  it('Should sort by date', () => {
    const testFilters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
    },
    filteredExpenses = filterExpenses(testExpenses, testFilters);

    expect(filteredExpenses).toEqual([
        testExpenses[2],
        testExpenses[0],
        testExpenses[1]
      ]);
  });

  it('Should sort by amount', () => {
    const testFilters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
    },
    filteredExpenses = filterExpenses(testExpenses, testFilters);

    expect(filteredExpenses).toEqual([
        testExpenses[1],
        testExpenses[2],
        testExpenses[0]
      ]);
  });
});
