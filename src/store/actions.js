import { areTweetsLoaded } from './selectors';
import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  TWEETS_LOADED_FAILURE,
  TWEETS_LOADED_REQUEST,
  TWEETS_LOADED_SUCCESS,
  UI_RESET_ERROR,
} from './types';

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLoginFailure = error => ({
  type: AUTH_LOGIN_FAILURE,
  error: true,
  payload: error,
});

export function authLogin(credentials) {
  return async function (dispatch, getState, { api: { auth }, router }) {
    try {
      dispatch(authLoginRequest());
      await auth.login(credentials);
      dispatch(authLoginSuccess());
      const to = router.state.location.state?.from?.pathname || '/';
      router.navigate(to);
    } catch (error) {
      dispatch(authLoginFailure(error));
      throw error;
    }
  };
}

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const tweetsLoadedRequest = () => ({
  type: TWEETS_LOADED_REQUEST,
});

export const tweetsLoadedSuccess = tweets => ({
  type: TWEETS_LOADED_SUCCESS,
  payload: tweets,
});

export const tweetsLoadedFailure = error => ({
  type: TWEETS_LOADED_FAILURE,
  error: true,
  payload: error,
});

export function loadTweets() {
  return async function (dispatch, getState, { api: { tweets } }) {
    if (areTweetsLoaded(getState())) {
      return;
    }

    try {
      dispatch(tweetsLoadedRequest());
      const tweetsList = await tweets.getLatestTweets();
      dispatch(tweetsLoadedSuccess(tweetsList));
    } catch (error) {
      dispatch(tweetsLoadedFailure(error));
      throw error;
    }
  };
}

export const uiResetError = () => ({ type: UI_RESET_ERROR });
