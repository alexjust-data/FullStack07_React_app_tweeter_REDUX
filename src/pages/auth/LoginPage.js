import { useState } from 'react';
import Button from '../../components/Button';
import { login } from './service';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    await login({
      username,
      password,
    });

    onLogin();
  };

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const disabled = !(username && password);

  return (
    <div>
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={username}
        />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Button type="submit" $variant="primary" disabled={disabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
