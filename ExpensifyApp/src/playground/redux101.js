//yarn add redux@3.7.2

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState());

console.log(store.getState());