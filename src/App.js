import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';
import NewTweetPage from './pages/tweets/NewTweetPage';
import { AuthContext } from './pages/auth/context';

function App({ initiallyLogged }) {
  const [isLogged, setIsLogged] = useState(initiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <AuthContext.Provider value={authValue}>
      <div className="App">
        {isLogged ? (
          <>
            <TweetsPage />
            {/* <NewTweetPage /> */}
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
