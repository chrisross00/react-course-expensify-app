import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const currentState = {
  text: '',
  startDate: undefined,
  endDate: undefined,
  sortBy: 'amount'
}

test('should setup defualt filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'some text' };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('some text');
});

// should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment(0).startOf('month');
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(startDate);
});

// should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment(0).endOf('month');
  const action = { type: 'SET_END_DATE', date: endDate };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toEqual(endDate);
})
