import logo from './logo.svg';
import './App.css';

function Hi(name){
  return (<div>
    <h1>Hello, {name}</h1>
    </div>)
}

function App() {
  return (
      Hi("Alex")
  );
}

export default App;
