import { Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/counter">
          {" "}
          1
        </Link>
        <Link to="/githubuser/AlexGiaffreda">
          2
        </Link>
        <Link to="/">
          {" "}
          3
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Welcome name='Alex'/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/githubuser'>
          <Route path=':name' element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;