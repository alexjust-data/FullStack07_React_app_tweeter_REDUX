import clsx from 'clsx';
// import './TweetsPage.css';
import styles from './TweetsPage.module.css';
import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';

const count = 1;

function TweetsPage({ dark }) {
  const [tweets, setTweets] = useState([]);
  //   const className = clsx('tweetsPage', { dark, light: !dark });
  const className = clsx(styles.tweetsPage, {
    [styles.dark]: dark,
    [styles.light]: !dark,
  });

  useEffect(() => {
    // const fetchTweets = async () => {
    //   const tweets = await getLatestTweets();
    //   setTweets(tweets);
    // };
    // fetchTweets();
    getLatestTweets().then(tweets => setTweets(tweets));

    return function () {
      console.log('Exit');
    };
  }, []);

  useEffect(() => {
    document.title = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className={className}>
      <ul style={{ listStyle: 'none', border: '1px solid blue', padding: 24 }}>
        {tweets.map(tweet => (
          <li key={tweet.id}>
            <span>{tweet.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TweetsPage;
