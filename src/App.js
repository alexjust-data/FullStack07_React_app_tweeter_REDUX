import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';
import { useAuth } from './pages/auth/context';

function App() {
  const { isLogged } = useAuth();
  return (
    <div className="App">
      {isLogged ? (
        <>
          <TweetsPage />
          {/* <NewTweetPage /> */}
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
