import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseList item with expenses', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
