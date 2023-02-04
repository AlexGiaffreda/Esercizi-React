import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <Counter interval = {1000} increment = {1} starting = {0}/>
    </div>
  );
}

export default App;
