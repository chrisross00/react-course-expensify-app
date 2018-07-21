import React from 'react';
import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixures/expenses';

test('should return 0 since no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
});

test('should return expense total', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(114195);
});

test('should return a single expense total', () => {
  const result = expensesTotal([expenses[1]]);
  expect(result).toBe(109500);
});
