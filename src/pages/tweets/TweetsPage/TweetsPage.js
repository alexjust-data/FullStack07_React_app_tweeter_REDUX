import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestTweets } from '../service';
import Button from '../../../components/shared/Button';
import Content from '../../../components/layout/Content';
import Tweet from '../components/Tweet';

import './TweetsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { tweetsLoaded } from '../../../store/actions';
import { getTweets } from '../../../store/selectors';
 
const EmptyList = () => (
  <div className="tweetsPage-empty">
    <p>Be the first one!</p>
    <Button $variant="primary">Create tweet</Button>
  </div>
);

function TweetsPage() {
  const tweets = useSelector(getTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    getLatestTweets().then(tweets => {
      dispatch(tweetsLoaded(tweets));
    });
  }, [dispatch]);

  return (
    <Content title="What's going on...">
      <div className="tweetsPage">
        {tweets.length ? (
          <ul>
            {tweets.map(({ id, ...tweet }) => (
              <li key={id}>
                <Link to={`${id}`}>
                  <Tweet {...tweet} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Content>
  );
}

export default TweetsPage;
