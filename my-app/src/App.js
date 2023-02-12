import Counter from './Counter';
import {useState} from 'react'
import FilterdList from './FilteredList';
import CarDetails from './carDetails';

function App() {

  const data={
    model:'ford ecosport',
    color:'bianco',
    year:2016

  }

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
     <CarDetails data={data}/>
    </div>
  );
}
export default App;