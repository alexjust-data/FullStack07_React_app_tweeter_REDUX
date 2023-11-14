import { useState } from 'react';
import TweetsPage from './pages/tweets/TweetsPage';
import LoginPage from './pages/auth/LoginPage';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);

  return (
    <div className="App">
      {isLogged ? <TweetsPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
