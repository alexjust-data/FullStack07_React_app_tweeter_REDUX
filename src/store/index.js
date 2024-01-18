import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  // implement state logic
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const callback = () => console.log('state', store.getState());
store.subscribe(callback);
callback();

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
