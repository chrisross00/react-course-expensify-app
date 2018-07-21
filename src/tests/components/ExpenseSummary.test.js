import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import moment from 'moment';
import expensesTotal from '../../selectors/expenses-total';


const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 9000,
  createdAt: moment(0).subtract(2, 'months')
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 443,
  createdAt: moment(0).add(2, 'days')
}];

test('Should see no expenses', () => {
  const wrapper = shallow(
    <ExpenseSummary
      vizExpenses={[]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should see two expenses totaling $94.43', () => {
  const expense = expenses;

  const wrapper = shallow(
    <ExpenseSummary
      vizExpenses={expense}
      expenseTotal={expensesTotal(expense)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('Should see one expense totaling $90.00', () => {
  const expense = [expenses[0]];
  const wrapper = shallow(
    <ExpenseSummary
      vizExpenses={expense}
      expenseTotal={expensesTotal(expense)}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
