import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate setTextFilter action object', () => {
  const text = 'something'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate setTextFilter default action object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});
