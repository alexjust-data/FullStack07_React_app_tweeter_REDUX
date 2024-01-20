import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/shared/Button';
import FormField from '../../../components/shared/FormField';

import './LoginPage.css';
import { useLocation, useNavigate } from 'react-router';
import {
  authLogin,
  uiResetError,
} from '../../../store/actions';
import { getUi } from '../../../store/selectors';

function LoginPage() {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(getUi);

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await dispatch(authLogin(credentials));
      const to = location?.state?.from?.pathname || '/';
      navigate(to);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    setCredentials(currentCredentials => ({
      ...currentCredentials,
      [event.target.name]: event.target.value,
    }));
  };

  const resetError = () => {
    dispatch(uiResetError());
  };

  const { username, password } = credentials;
  const buttonDisabled = !(username && password) || isFetching;

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.username}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button
          type="submit"
          $variant="primary"
          disabled={buttonDisabled}
          className="loginForm-submit"
        >
          {isFetching ? 'Connecting...' : 'Log in'}
        </Button>
        {error && (
          <div className="loginPage-error" onClick={resetError}>
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
