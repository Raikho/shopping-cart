import { useState } from 'react'
import './App.css'

function App() {

  const arr = [];
  for (let i = 0; i < 14; i++)
    arr.push(i);

  let isTesting = true;
  const [testHeading, setTestHeading] = useState('Test Heading');
  const clickHandler = () => {setTestHeading('Radical Rhinos');};

  return (
    <div className="App">
      
      {(isTesting) ? 
        <div className="testing">
          <h1>{testHeading}</h1>
          <button type="button" onClick={clickHandler}>Click Me</button>
        </div> :
        null
      }

      <div className="header"></div>
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
