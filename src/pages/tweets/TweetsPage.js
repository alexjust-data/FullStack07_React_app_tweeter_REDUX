import clsx from 'clsx';
// import './TweetsPage.css';
import styles from './TweetsPage.module.css';
import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { logout } from '../auth/service';
import Layout from '../../components/layout/Layout';

function TweetsPage(props) {
  const [tweets, setTweets] = useState([]);

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

  return (
    <Layout title="What's going on..." {...props}>
      <div className="tweetsPage">
        {tweets.length ? (
          <ul
            style={{ listStyle: 'none', border: '1px solid blue', padding: 24 }}
          >
            {tweets.map(tweet => (
              <li key={tweet.id}>
                <span>{tweet.content}</span>
              </li>
            ))}
          </ul>
        ) : (
          <Button $variant="primary">Be the first one...</Button>
        )}
      </div>
    </Layout>
  );
}

export default TweetsPage;
