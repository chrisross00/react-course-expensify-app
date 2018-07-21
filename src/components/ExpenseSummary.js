import React from 'react';
import { connect } from 'react-redux';
import expenseFilter from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ vizExpenses, expenseTotal }) => {
  const expenseWord = (vizExpenses.length === 1) ? "expense" : "expenses"
  const expenseAmount = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
      <h2>
        Viewing {vizExpenses.length} {expenseWord} totaling {expenseAmount}
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vizExpenses: expenseFilter(state.expenses, state.filters),
    expenseTotal: expensesTotal(expenseFilter(state.expenses, state.filters))
  };
}

export default connect(mapStateToProps)(ExpenseSummary);
