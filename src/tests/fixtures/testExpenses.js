import moment from 'moment';

const testExpenses = [
  {
    id: '1',
    createdAt: 0,
    amount: 195,
    description: 'Gum',
    note: ''
  },
  {
    id: '2',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    amount: 109500,
    description: 'Rent',
    note: ''
  },
  {
    id: '3',
    createdAt: moment(0).add(4, 'days').valueOf(),
    amount: 4500,
    description: 'Credit card',
    note: ''
  }
];

export default testExpenses;
