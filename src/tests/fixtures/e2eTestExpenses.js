const moment = require('moment');

const e2eTestExpenses = [
  {
    createdAt: moment().format('L'),
    amount: '1.95',
    description: 'Gum',
    note: 'e2e test'
  },
  {
    id: '2',
    createdAt: moment().subtract(1, 'days').format('L'),
    amount: '1095.00',
    description: 'Rent',
    note: 'e2e test'
  },
  {
    id: '3',
    createdAt: moment().subtract(2, 'days').format('L'),
    amount: '45.00',
    description: 'Credit card',
    note: 'e2e test'
  }
];

module.exports = {
  e2eTestExpenses,
};
