import { useState } from 'react'
import './App.css'

function App() {

  const arr = [];
  for (let i = 0; i < 14; i++) {
    arr.push(i);
  }

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
