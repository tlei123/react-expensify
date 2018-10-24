import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import testExpenses from '../fixtures/testExpenses';

test('Should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={testExpenses} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseList with no-expenses message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
