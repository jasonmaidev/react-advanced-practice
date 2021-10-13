import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 500 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 300 }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));