import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_CREATED,
  TWEETS_DETAIL_SUCCESS,
  TWEETS_LOADED_SUCCESS,
  UI_RESET_ERROR,
} from './types';

const defaultState = {
  auth: false,
  tweets: {
    areLoaded: false,
    data: [],
  },
  ui: {
    isFetching: false,
    error: null,
  },
};

// function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case AUTH_LOGIN:
//       return {
//         ...state,
//         auth: true,
//       };
//     case AUTH_LOGOUT:
//       return {
//         ...state,
//         auth: false,
//       };
//     case TWEETS_LOADED:
//       return {
//         ...state,
//         tweets: action.payload,
//       };

//     case TWEETS_CREATED:
//     default:
//       return state;
//   }
// }

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function tweets(state = defaultState.tweets, action) {
  switch (action.type) {
    case TWEETS_LOADED_SUCCESS:
      return { areLoaded: true, data: action.payload };

    case TWEETS_DETAIL_SUCCESS:
      return { areLoaded: false, data: [action.payload] };
    // return { ...state, data: [...state.data, action.payload] };

    case TWEETS_CREATED:
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { isFetching: false, error: action.payload };
  }

  if (action.type.endsWith('/request')) {
    return { isFetching: true, error: null };
  }

  if (action.type.endsWith('/success')) {
    return { isFetching: false, error: null };
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }

  return state;
}

// export default function combinedReducer(state = defaultState, action) {
//   return {
//     auth: auth(state.auth, action),
//     tweets: tweets(state.tweets, action),
//   };
// }

// export default combineReducers({ auth, tweets });