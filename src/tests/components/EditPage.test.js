import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixures/expenses';

let editExpense, history, removeExpense, wrapper, expense;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  removeExpense = jest.fn();
  expense = expenses[1];
  wrapper = shallow(
    <EditPage
      removeExpense={removeExpense}
      editExpense={editExpense}
      history={history}
      expense={expense} />);
});

test('should render editExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
