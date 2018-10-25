import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/Expense';
import testExpenses from '../fixtures/testExpenses';

test('Should render Expense with provided props', () => {
  const wrapper = shallow(<Expense {...testExpenses[0] } />);

  expect(wrapper).toMatchSnapshot();
});
