import React from 'react';
import { shallow } from 'enzyme';
import { Expense } from '../../components/Expense';
import ConfirmModal from '../../components/ConfirmModal';
import testExpenses from '../fixtures/testExpenses';

const testExpense = testExpenses[0];
const startRemoveExpense = jest.fn();
const wrapper = shallow(<Expense {...testExpenses[0] } startRemoveExpense={startRemoveExpense} />);

test('Should render Expense with provided props', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should show remove-confirmation modal on remove-button click', () => {
  wrapper.setState({ showConfirmModal: false });
  wrapper.find('button.expense-remove').simulate('click');

  expect(wrapper.state('showConfirmModal')).toBeTruthy();

  wrapper.setState({ showConfirmModal: false });
});

test('Should hide remove-confirmation modal when cancelled', () => {
  startRemoveExpense.mockClear();
  wrapper.setState({ showConfirmModal: false });

  wrapper.find('button.expense-remove').simulate('click');
  wrapper.instance().onRemoveCancel();

  expect(wrapper.state('showConfirmModal')).toBeFalsy();
  expect(startRemoveExpense).not.toHaveBeenCalled();
})

test('Should handle confirmed removal properly', () => {
  startRemoveExpense.mockClear();
  wrapper.instance().startRemove();

  expect(wrapper.state('showConfirmModal')).toBeFalsy();
  expect(startRemoveExpense).toHaveBeenCalledWith({ id: testExpense.id });
});
