import filtersReducer from "../../reducers/filters";

test('test set up default filter', () => {
  const state = filtersReducer(undefined, { type: '@@INNIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount'
  });
});

test('test set sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('test set text filter', () => {
  // const text = 'filter text';
  // const action = {
  //   type: 'SET_TEXT_FILTER',
  //   text
  // }
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'text value' });
  expect(state.text).toBe('text value');
});