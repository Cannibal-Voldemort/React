import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username:"Aman",
    age: 22
  }
  let newArr =[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black
      p-4 rounded-xl mb-4'>
      Tailwind Test
    </h1>
    <Card username = "code with sutta" btnText= "click me" />
    <Card username = " harsh chutiya" />
    </>
  )
}

export default App
