import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_CREATED,
  TWEETS_LOADED,
  UI_RESET_ERROR,
} from './types';

const defaultState = {
  auth: false,
  tweets: [],
  ui: {
    isFetching: false,
    error: null,
  },
};


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
    case TWEETS_LOADED:
      return action.payload;

    case TWEETS_CREATED:
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { isFetching: false, error: action.payload };
  }

  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { isFetching: true, error: null };

    case AUTH_LOGIN_SUCCESS:
      return { isFetching: false, error: null };

    case UI_RESET_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
}

