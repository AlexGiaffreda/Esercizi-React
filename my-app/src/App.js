import './App.css';
import { ClickCounter } from './ClickCounter';
import ClickTracker from './ClickTracker';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <Counter interval = {1000} increment = {1} starting = {0}/>
      <ClickCounter />
      <ClickTracker />
    </div>
  );
}

export default App;
