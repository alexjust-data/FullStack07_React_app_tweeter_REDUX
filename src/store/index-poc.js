// import { createStore } from 'redux';

function createStore(reducer, preloadedState) {
  let state = preloadedState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function () {
      listeners = listeners.filter(l => !listener);
    };
  }

  dispatch({ type: 'initialization' });

  return {
    getState,
    subscribe,
    dispatch,
  };
}

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = () => ({ type: INCREMENT });
const decrement = payload => ({ type: DECREMENT, payload });

const reducer = (state = 0, action) => {
  // implement state logic
  switch (action.type) {
    case INCREMENT:
      return state + (action.payload || 1);
    case DECREMENT:
      return state - (action.payload || 1);
    default:
      return state;
  }
};

const store = createStore(reducer);

const callback = () => console.log('state', store.getState());
const unsubscribe = store.subscribe(callback);
callback();

store.dispatch(increment());

unsubscribe();
store.dispatch(decrement(5));
console.log(store.getState());
