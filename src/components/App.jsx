// import { useState } from 'react'
import './App.css';
import Header from './Header'
import ItemList from './ItemList'

export default function App() {

  const arr = [];
  for (let i = 0; i < 14; i++)
    arr.push({name: `#${i}`, id: i});

  // let isTesting = true;
  // const [testHeading, setTestHeading] = useState('Test Heading');
  // const clickHandler = () => {setTestHeading('Radical Rhinos');};

  const handleChangeAmount = () => {};

  return (
    <div className="App">
      
      {/* {(isTesting) ? 
        <div className="testing">
          <h1>{testHeading}</h1>
          <button type="button" onClick={clickHandler}>Click Me</button>
        </div> :
        null
      } */}

      <Header title="Fish Supply" total={20}/>
      <ItemList items={arr} onChangeAmount={handleChangeAmount}/>
      <div className="footer">Footer</div>
    </div>
  )
}