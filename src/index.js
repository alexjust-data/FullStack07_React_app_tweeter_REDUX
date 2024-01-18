import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import { AuthContextProvider } from './pages/auth/context';
import ErrorBoundary from './components/errors/ErrorBoundary';

import configureStore from './store';
import { Provider } from 'react-redux';
const store = configureStore();

const accessToken = storage.get('auth');
if (accessToken) {
  setAuthorizationHeader(accessToken);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <AuthContextProvider initiallyLogged={!!accessToken}>
            <App />
          </AuthContextProvider>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
