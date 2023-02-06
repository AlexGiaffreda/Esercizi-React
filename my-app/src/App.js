import './App.css';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  return (
    <div className="App">
      <InteractiveWelcome />
      <Login />
      <UncontrolledLogin />
    </div>
  );
}

export default App;