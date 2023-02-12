import Counter from './Counter';
import {useState} from 'react'
import FilterdList from './FilteredList';
import CarDetails from './carDetails';
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import Title from './Title';

function App() {

  const [language, setLanguage] = useState('eng')

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

  function selectHandler(event){
    setLanguage(event.target.value)
 }



  return (
    <div className="App">
      {toggle && <Counter onCounterChange={onCounterChange}/>}
     <button onClick={handleButton} >Toggle</button>
     <FilterdList list={list}/>
     <CarDetails data={data}/>
     <select value={language} onChange={selectHandler}>
        <option value='en'>ENGLISH</option>
        <option value='it'>ITALIANO</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage>
          <Title />
        </DisplayLanguage>
      </LanguageContext.Provider>
    </div>
  );
}
export default App;