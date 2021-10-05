//yarn add redux@3.7.2
import { createStore } from 'redux';

const addCount = ({ addBy = 1 } = {}) => ({
  type: 'ADD',
  addBy
})

const minusCount = ({ minusBy = 1 } = {}) => ({
  type: 'MINUS',
  minusBy
})

const setCount = ({ setTo = 888 } = {}) => ({
  type: 'SET',
  setTo
})

const reset = () => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.addBy
      };
    case 'MINUS':
      return {
        count: state.count - action.minusBy
      };
    case 'SET':
      return {
        count: action.setTo
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
})

//dispatch = action
store.dispatch(addCount({ addBy: 50 }))

store.dispatch(minusCount({ minusBy: 1000 }))

store.dispatch(setCount({ setTo: 666 }))

store.dispatch(reset())