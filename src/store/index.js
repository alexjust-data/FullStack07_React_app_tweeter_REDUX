import { createStore, combineReducers, applyMiddleware } from 'redux';
import { withExtraArgument } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import * as reducers from './reducers';
import * as actionCreators from './actions';

import * as tweets from '../pages/tweets/service';
import * as auth from '../pages/auth/service';

const composeEnhancers = composeWithDevTools({ actionCreators });

// const thunk = extraArgument => store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch, store.getState, extraArgument);
//   }
//   next(action);
// };

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action, store.getState());
  const result = next(action);
  console.log('final state', store.getState());
  console.groupEnd();
  return result;
};

const noAction = () => next => action => {
  if (action.type.endsWith('/no-throw')) {
    return;
  }
  return next(action);
};

const timestamp = () => next => action => {
  return next({
    ...action,
    meta: { ...action.meta, timestamp: new Date() },
  });
};

export default function configureStore(preloadedState, { router }) {
  const middleware = [
    withExtraArgument({ api: { auth, tweets }, router }),
    timestamp,
    logger,
    noAction,
  ];
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
}