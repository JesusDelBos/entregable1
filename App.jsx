import { useState } from 'react'
import reactLogo from './assets/react.svg'
import phrases from './phrases.json'
import './App.css'

function App() {
  const [color, setColor] = useState("FF9671")

  const [index, setIndex] = useState(Math.floor(Math.random() * phrases.length))
  let colorRandom = Math.floor(Math.random()*16777215).toString(16);

const changePhrases = () => {
  setIndex(Math.floor(Math.random() * phrases.length)) 
  setColor(colorRandom)
}

const colors = ["red", "black", "blue", "#FF9671", "#FFC75F", "#F9F871"];


  return (
    <div className='Container-general'style={{background:`#${color}`}}>
    <div className="App" >
     <p className='phrases'style={{color:`#${color}`}}>" {phrases[index].quote} {colors[0].color} "</p>
     <div>
      <p className='author'style={{color:`#${color}`}}>{phrases[index].author}</p>
    
    </div>
    <div className='button-container'>
      <button className='button' style={{background:`#${color}`}} onClick={changePhrases}>Change</button>
      </div>
    </div>
   
    
    </div>
  )
}

export default App
