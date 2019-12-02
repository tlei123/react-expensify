import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import testExpenses from '../fixtures/testExpenses';

describe('AddExpense component', () => {
	let startAddExpense, history, wrapper;
	beforeEach(() => {
	  startAddExpense = jest.fn();
	  history = { push: jest.fn() };
	  wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history}/>);
	});

	it('Should render AddExpense correctly', () => {
	  expect(wrapper).toMatchSnapshot();
	});

	it('Should handle onSubmit', () => {
	  wrapper.find('ExpenseForm').prop('onSubmit')(testExpenses[1]);

	  expect(history.push).toHaveBeenLastCalledWith('/');
	  expect(startAddExpense).toHaveBeenLastCalledWith(testExpenses[1]);
	});
});

