import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE action
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE action
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE action
const editExpense = (id, updates, descr) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
  descr
});

// SET_TEXT_FILTER action
const setTextFilter = (text = '') => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});
// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return (state.filter(({ id }) => id !== action.id));
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return { ...expense }
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Combine Reducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: '1000', createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: '300', createdAt: 1000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }, { description: 'More Expensive Coffee' }));

// store.dispatch(setTextFilter('Rent')); // object shows rent for 'text'
// store.dispatch(setTextFilter()); // object shows rent for 'text'
// store.dispatch(setTextFilter()); //empty string

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1001));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(1001));
// store.dispatch(setEndDate());

// const demoState = {
//   expenses: [{
//     id: 'asdf;kljasdg',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };
