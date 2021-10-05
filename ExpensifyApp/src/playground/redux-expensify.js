//yarn add uuid@3.1.0

import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// Add Expense
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
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
// Set Text Filter
// Sort by Amount
// Set Start Date
// Set End Date

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Meal', amount: 2000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const personOne = {
  name: 'Kyle',
  ageOld: 24,
  location: {
    street: 'long',
    city: 'somewhere'
  }
}

const printUser = ({ ageOld, location: { street, city } }) => console.log(`Age is ${ageOld} living in ${street} ${city}`);

printUser(personOne)

const demoState = {
  expenses: [{
    id: 'abcabc',
    description: 'January Rent',
    note: 'This is last month rent',
    amount: 50000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}