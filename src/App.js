import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';
import Layout from './components/layout/Layout';

import { useAuth } from './pages/auth/context';

function App() {
  const { isLogged } = useAuth();
  return isLogged ? (
    <Layout>
      <TweetsPage />
      {/* <NewTweetPage /> */}
    </Layout>
  ) : (
    <LoginPage />
  );
}

export default App;
