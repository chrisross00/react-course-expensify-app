import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expenseFilter from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ vizExpenses, expenseTotal }) => {
  const expenseWord = (vizExpenses.length === 1) ? "expense" : "expenses"
  const expenseAmount = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Viewing <span>{vizExpenses.length}</span> {expenseWord} totaling <span>{expenseAmount}</span>
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
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
