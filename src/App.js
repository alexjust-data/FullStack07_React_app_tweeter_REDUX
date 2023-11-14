import TweetsPage from './pages/tweets/TweetsPage';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <TweetsPage />
      <Button $variant="primary" onClick={() => console.log('clicked')}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
