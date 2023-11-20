import { useParams } from 'react-router';
import Content from '../../../components/layout/Content';

function TweetPage() {
  const params = useParams();
  return (
    <Content title="Tweet detail">
      <div>Tweet detail {params.tweetId} goes here...</div>
    </Content>
  );
}

export default TweetPage;
