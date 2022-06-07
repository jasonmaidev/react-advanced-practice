import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('test sort by text filter', () => {
  const filter = {
    text: 'e',
    sortBy: 'amount'
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[0]]);
})

test('test sort by amount', () => {
  const filter = {
    text: '',
    sortBy: 'amount'
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})