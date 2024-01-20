import { useParams } from 'react-router';
import Content from '../../../components/layout/Content';
import { useSelector } from 'react-redux';
import { getTweet } from '../../../store/selectors';

function TweetPage() {
  const params = useParams();

  const tweet = useSelector(getTweet(params.tweetId));

  return (
    <Content title="Tweet detail">
      <div>
        Tweet detail {params.tweetId} goes here...
        {tweet && (
          <div>
            <code>{JSON.stringify(tweet)}</code>
          </div>
        )}
      </div>
    </Content>
  );
}

export default TweetPage;
