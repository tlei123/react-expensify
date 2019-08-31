const moment = require('moment');

const e2eTestExpenses = [
  {
    createdAt: moment().format('L'),
    description: 'Gum',
    amount: '1.95',
    note: 'e2e test'
  },
  {
    id: '2',
    createdAt: moment().subtract(1, 'days').format('L'),
    description: 'Rent',
    amount: '1095.00',
    note: 'e2e test'
  },
  {
    id: '3',
    createdAt: moment().subtract(2, 'days').format('L'),
    description: 'Credit card',
    amount: '45.00',
    note: 'e2e test'
  }
];

module.exports = {
  e2eTestExpenses,
};
