// yarn add react-redux@5.0.5
//yarn add redux@3.7.2

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 500 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 3000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));