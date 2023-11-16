import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';

function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? (
        <>
          <TweetsPage onLogout={handleLogout} isLogged={isLogged} />
          {/* <NewTweetPage /> */}
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
