import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixures/expenses';

let startEditExpense, history, startRemoveExpense, wrapper, expense;

beforeEach(() => {
  startEditExpense = jest.fn();
  history = { push: jest.fn() };
  startRemoveExpense = jest.fn();
  expense = expenses[1];
  wrapper = shallow(
    <EditPage
      startRemoveExpense={startRemoveExpense}
      startEditExpense={startEditExpense}
      history={history}
      expense={expense} />);
});

test('should render startEditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
