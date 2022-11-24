import { useState } from 'react';
import './App.css';

function NameList(){
  const[list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(""); 

   function nameChange(){
     setList([...list, name]);
     setName('');
     console.log(list,name);
   };

  return(
    <div>
      <ul>
        {list.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <button
      onClick={nameChange}>
        Add Name
      </button> 
    </div>
  )
}

function Counter() {
  const[count, setCount] = useState(10);

  function addOne(){
    setCount(count + 1);
  }

  function subtractOne(){
    setCount(count - 1);
  }

  return (
    <div>
      <header>
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
      <NameList />
    </div>
  );
}

export default App;
