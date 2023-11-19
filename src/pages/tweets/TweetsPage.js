import { getLatestTweets } from './service';
import { useEffect, useState } from 'react';
import Button from '../../components/shared/Button';
import Layout from '../../components/layout/Layout';
import './TweetsPage.css';

function TweetsPage() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // const fetchTweets = async () => {
    //   const tweets = await getLatestTweets();
    //   setTweets(tweets);
    // };
    // fetchTweets();
    getLatestTweets().then(tweets => setTweets(tweets));
  }, []);

  return (
    <Layout title="What's going on...">
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
