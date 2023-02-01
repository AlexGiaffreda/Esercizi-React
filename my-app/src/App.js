import './App.css';
import { Welcome } from './Welcome';

function App() {
  return (
    <div className="App">
     <Welcome name={<strong>Alex</strong>} age="22"/>

    </div>
  );
}

export default App;

// Se nessuna name prop viene passata al componente Welcome, viene solo renderizzato il testo che non riguarda la prop, in questo caso Hello. //
// Si può impostare un valore di default per le props con Component.deafultProp e specificando i valori di default. //