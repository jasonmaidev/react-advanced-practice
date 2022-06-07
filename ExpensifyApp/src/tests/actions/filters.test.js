import { setTextFilter, sortByAmount, } from "../../actions/filters";

test('test generate set custom text filter object', () => {
  const text = 'bill';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('test generate set default text filter object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('test generate sort amount filter object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_AMOUNT' });
});