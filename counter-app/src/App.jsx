import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const addValue = () => {
    if(counter != 50){
    setCount(counter + 1);
    }
    else{
      alert("Counter can't more increse than 50");
    }
  }
  const removeValue = () => {
    if(counter != 0){
      setCount(counter - 1);
    }
    else{
      alert("Counter can't below decrese than 0");
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter App</h1>
      <h2>Created By:</h2>
      <h3>Gyasuddin</h3>
      <div className="card">
        <button onClick={addValue}>
          Increment is: {counter}
        </button>-------
        <button onClick={removeValue}>
          Decrement is: {counter}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Increment and decrement button 
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
