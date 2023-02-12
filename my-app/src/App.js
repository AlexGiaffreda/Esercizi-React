import Counter from './Counter';
import Login from './Login';
import { useState } from 'react';

function App() {

  const [toggle, setToggle]= useState(true)

  function onCounterChange(counter){
    console.log(`counter: ${counter}`)
  }

  function handleButton(){
    setToggle((s) => !s)
  }
  return (
    <div className="App">
      <Login />
      {toggle && <Counter onCounterChange={onCounterChange}/>}
      <button onClick={handleButton}>Toggle</button>
    </div>
    
  );
}

export default App;