import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  let addValue=()=>{
    setCounter(counter+1)
  }
  let removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Counter</h1>
     <h2>Counter Value={counter}</h2>
     <button onClick={addValue}>Increase Value</button>
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
