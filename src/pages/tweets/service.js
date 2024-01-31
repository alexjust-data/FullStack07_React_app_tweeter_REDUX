import client from '../../api/client';

const tweetsUrl = '/api/tweets';

export const getLatestTweets = () => {
  const url = `${tweetsUrl}?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};

export const createTweet = tweet => {
  const url = tweetsUrl;
  return client.post(url, tweet);
};

export const getTweet = tweetId => {
  const url = `${tweetsUrl}/${tweetId}?_expand=user&_embed=likes`;
  return client.get(url);
};
