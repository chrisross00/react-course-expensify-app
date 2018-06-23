import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixures/filters';
import { wrap } from 'module';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const e = {
    target: { value: altFilters.text }
  };
  wrapper.find('input').prop('onChange')(e);
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test('should sort by date', () => {
  const e = {
    target: { value: 'date' }
  };
  wrapper.find('select').prop('onChange')(e);
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').prop('onChange')({
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  wrapper.setProps({
    filters: altFilters
  });
  const dates = { startDate: altFilters.startDate, endDate: altFilters.endDate }
  wrapper.find('DateRangePicker').prop('onDatesChange')(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
