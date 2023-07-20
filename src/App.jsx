import { useState } from 'react'
import './App.css'

function App() {

  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="content">
        {arr.map(item => (
          <div 
            key={item} 
            className="card"
          >{item}</div>
        ))}
      </div>
      <div className="footer">Footer</div>
    </div>
  )
}

export default App
