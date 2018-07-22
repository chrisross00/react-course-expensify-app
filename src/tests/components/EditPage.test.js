import React from 'react';
import { shallow } from 'enzyme';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixures/expenses';

let editExpense, history, startRemoveExpense, wrapper, expense;

beforeEach(() => {
  editExpense = jest.fn();
  history = { push: jest.fn() };
  startRemoveExpense = jest.fn();
  expense = expenses[1];
  wrapper = shallow(
    <EditPage
      startRemoveExpense={startRemoveExpense}
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

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
