import TweetsPage from './pages/tweets/TweetsPage';
import Button from './components/Button';

import client from './api/client';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <TweetsPage />}
      <Button $variant="primary" onClick={() => setShow(v => !v)}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
