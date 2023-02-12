import Counter from './Counter';
import {useState} from 'react'
import FilterdList from './FilteredList';

function App() {

  const [list, setList] = useState([{
    id: 1,
    name: 'Alex',
    age: 22
  }, {
    id: 2,
    name: 'Alex',
    age: 22
  },
  {
    id: 3,
    name: 'Alex',
    age: 22
  },
  {
    id: 4,
    name: 'Alex',
    age: 22
  }])

  const [toggle,setToggle]=useState(true)

  function onCounterChange(counter){
    console.log(`The count now is ${counter}`)
  }

  function handleButton(){
    setToggle((s)=>!s)
  }

  return (
    <div className="App">
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
     <FilterdList list={list}/>
    </div>
  );
}
export default App;