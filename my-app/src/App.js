import { Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import GithubUser from './GithubUser';

function App() {
  return (
    <div className="App">
      <div>
      <Link to="/counter">
          {" "}
          1
        </Link>
        <Link to="/user">
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
        <Route path="user" element={<ShowGithubUser />}>
          <Route index element={<h3> "Add a user and select it"</h3>} />
          <Route path=':name' element={<GithubUser />} />
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;