import { useState } from "react"
function App() {
  
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    //console.log("value added", Math.random());
    setCounter(counter+1)
  }
  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1> React </h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick = {addValue}>
        Add Value</button>
        <br></br>
      <button
        onClick = {removeValue}>
        Remove value</button>
    </>
  )
}

export default App
