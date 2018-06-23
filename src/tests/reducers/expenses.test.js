import expensesReducer from '../../reducers/expenses';
import expenses from '../fixures/expenses';


test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense by id if not', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

// should add an expense
test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'NewThing',
      note: '',
      amount: 111,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
})

// should edit an expense
test('should edit an expense', () => {
  const amount = 999;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(amount);
})

// should not edit expense if not found
test('should not edit an expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount: 999
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
