import Card from "./Card";
import './App.css';

const randomNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card num={randomNum()} />
      <Card num={randomNum()} />
      <Card num={randomNum()} />
    </div>
  );
}

export default App;
