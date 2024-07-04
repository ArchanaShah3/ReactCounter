import React, { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)

  // let counter = 1
  const addValue = () => {
    console.log("clicked", counter)
    setCounter(counter + 1)
  }
  const decValue = () => {
    console.log("clicked", counter)
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>Counter Project to learn hooks </h1>
      <h3> The counter value is : {counter}</h3>
      <br />
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={decValue}>decrement value {counter}</button>
      <p> Footer : {counter} </p>
    </div>
  )
}

export default App
