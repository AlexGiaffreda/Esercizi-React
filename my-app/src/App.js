import './App.css';
import Welcome  from './Welcome';

export default function App() {
  return (
    <div className="App">
     <Welcome name={<strong>Alex</strong>} age="22"/>

    </div>
  );
}
