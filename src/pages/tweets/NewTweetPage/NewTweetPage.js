import Layout from '../../../components/layout/Layout';
import Button from '../../../components/shared/Button';
import Photo from '../../../components/shared/Photo';
import Textarea from '../../../components/shared/Textarea';

import './NewTweetPage.css';

function NewTweetPage() {
  return (
    <Layout title="What are you thinking?">
      <div className="newTweetPage">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form>
            <Textarea
              className="newTweetPage-textarea"
              placeholder="Hey! What's up!"
            />
            <div className="newTweetPage-footer">
              <span className="newTweetPage-characters">...characters</span>
              <Button
                type="submit"
                className="newTweetPage-submit"
                $variant="primary"
              >
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewTweetPage;
