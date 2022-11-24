import { useState } from 'react';
import './App.css';

function Counter() {
  const[count, setCount] = useState(10);

  function addOne(){
    setCount(count + 1);
  }

  function subtractOne(){
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
        onClick={addOne}>
          Add
        </button>
        <button
        onClick={subtractOne}>
          Subtract
        </button>
        <h1>
          {count}
        </h1>
      </header>
    </div>
  );
}

function App() {
  return(
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
