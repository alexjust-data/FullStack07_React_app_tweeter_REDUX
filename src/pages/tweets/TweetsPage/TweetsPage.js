import { getLatestTweets } from '../service';
import { useEffect, useState } from 'react';
import Button from '../../../components/shared/Button';
import Layout from '../../../components/layout/Layout';
import Tweet from '../components/Tweet';

import './TweetsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first one!</p>
    <Button $variant="primary">Create tweet</Button>
  </div>
);

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
          <ul>
            {tweets.map(({ id, ...tweet }) => (
              <li key={id}>
                <Tweet {...tweet} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
}

export default TweetsPage;
