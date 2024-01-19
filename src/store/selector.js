export const getIsLogged = state => state.auth;

export const getTweets = state => state.tweets;

export const getTweet = tweetId => state =>
  getTweets(state).find(tweet => tweet.id === Number(tweetId));