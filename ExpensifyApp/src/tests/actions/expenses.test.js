import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('test remove expense', () => {
  const action = removeExpense({ id: 'abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc'
  });
});

test('test edit expense', () => {
  const action = editExpense('abc', { amount: 500 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      amount: 500
    }
  })
})

test('test add expense object with user values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 1000,
    note: 'this is a test rent data'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('test add expense object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      id: expect.any(String)
    }
  })
});