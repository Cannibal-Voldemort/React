import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App | lawde ka</h1>
    </div>
  )
}
/*const reactElement = {
  type: 'a',
  props:{
      href: 'http://google.com' ,
      target: '_blank' 
  },
  children: 'Click me to visit google'
}*/
const anotherElement = (
  <a href="http://google.com" target="/blank">
    Visit google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    anotherElement
)
