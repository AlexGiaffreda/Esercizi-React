import Counter from './Counter';
import Login from './Login';

function App() {

  function onCounterChange(counter){
    console.log(`counter: ${counter}`)
  }
  return (
    <div className="App">
      <Counter initialValue={41} onCounterChange={onCounterChange} />
      <Login />
    </div>
  );
}

export default App;