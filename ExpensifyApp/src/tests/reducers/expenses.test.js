import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('test set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
})

test('test remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[2].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test('test not remove expense by wrong id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'x'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('test add expense by id', () => {
  const expense = {
    id: 'd',
    amount: 5000,
    description: 'car'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('test edit an expense', () => {
  const amount = 10;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(10);
});

test('test not edit an expense if no id', () => {
  const amount = 10;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});