import logo from './logo.svg';
import './App.css';

function Sum(a,b){
  return (<div>
    <h2>{a + b}</h2>
    </div>)
}

function App() {
  return (
      Sum(4, 1)
  );
}

export default App;
