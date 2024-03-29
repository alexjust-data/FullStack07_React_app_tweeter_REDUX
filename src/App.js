import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import TweetsPage from './pages/tweets/TweetsPage';
import NewTweetPage from './pages/tweets/NewTweetPage/NewTweetPage';
import TweetPage from './pages/tweets/TweetPage';
import RequireAuth from './pages/auth/components/RequireAuth';

// import LoginPage from './pages/auth/LoginPage';
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path="/tweets" element={<Layout />}>
        <Route index element={<TweetsPage />} />
        <Route path=":tweetId" element={<TweetPage />} />
        <Route
          path="new"
          element={
            <RequireAuth>
              <NewTweetPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/tweets" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
