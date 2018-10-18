import moment from 'moment';

export const filterExpenses = (expenses, {text, startDate, endDate, sortBy }) => {
  return expenses.filter(item => {
    const createdAtMoment = moment(item.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = item.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return a.createdAt < b.createdAt ? 1 : -1;
      case 'amount':
        return a.amount < b.amount ? 1 : -1;
      default:
        return 0;
    }
  });
};
