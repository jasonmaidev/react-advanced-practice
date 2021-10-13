//yarn add uuid@3.1.0

import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// Remove Expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Edit Expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Set Text Filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
// Sort by Date
const sortByDate = () => ({
  type: 'SORT_DATE'
});
// Sort by Amount
const sortByAmount = () => ({
  type: 'SORT_AMOUNT'
});
// Set Start Date
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
// Set End Date
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, update) => {
  switch (update.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        update.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== update.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === update.id) {
          return {
            ...expense,
            ...update.updates
          }
        }
        else {
          return expense;
        }
      })
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, update) => {
  switch (update.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: update.text
      };
    case 'SORT_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: update.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: update.endDate
      }
    default:
      return state;
  }
};

//Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

// create Store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 11000, createdAt: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Meal', amount: 2000, createdAt: 500 }));

// console.log('hi');
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount(''));
// store.dispatch(sortByDate(''));

//store.dispatch(setStartDate(600));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(900));

// const demoState = {
//   expenses: [{
//     id: 'abcabc',
//     description: 'January Rent',
//     note: 'This is last month rent',
//     amount: 50000,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// }

// const user = {
//   name: 'Jen',
//   age: 30
// }

// console.log({
//   ...user,
//   age: '29',
//   hobby: 'dota'
// })