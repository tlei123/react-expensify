// Filters actions.
export const setFilterText = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

export const setFilterSortByAmount = () => ({
  type: 'SET_FILTER_SORTBY',
  sortBy: 'amount',
});

export const setFilterSortByDate = () => ({
  type: 'SET_FILTER_SORTBY',
  sortBy: 'date',
});

export const setFilterStartDate = (date = undefined) => ({
  type: 'SET_FILTER_STARTDATE',
  date
});

export const setFilterEndDate = (date = undefined) => ({
  type: 'SET_FILTER_ENDDATE',
  date
});
