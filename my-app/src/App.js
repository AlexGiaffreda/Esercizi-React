import Welcome from "./Welcome";
import Sum from "./Sum";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <Sum numbers={[4, 1, 41]} />
    </div>
  )
}