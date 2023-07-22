// import { useState } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './Header'
import ItemList from './ItemList'

const baseItems = [
  {name: 'Betta', cat: 'fresh', price: 9, id: uniqid(), img: 'betta', quantity: 0},
  {name: 'Oscar', cat: 'fresh', price: 3, id: uniqid(), img: 'oscar', quantity: 0},
  {name: 'Discus', cat: 'fresh', price: 5, id: uniqid(), img: 'discus', quantity: 0},
  {name: 'Clownfish', cat: 'salt', price: 3, id: uniqid(), img: 'clown-fish', quantity: 0},
  {name: 'Blue Tang', cat: 'salt', price: 4, id: uniqid(), img: 'blue-tang', quantity: 0},
  {name: 'Angel Fish', cat: 'salt', price: 6, id: uniqid(), img: 'angel-fish', quantity: 0},
  {name: 'Fish Bowl', cat: 'supplies', price: 18, id: uniqid(), img: 'fish-bowl', quantity: 0},
  {name: 'Decoration', cat: 'supplies', price: 10, id: uniqid(), img: 'decoration', quantity: 0},
];

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
      <ItemList items={baseItems} onChangeAmount={handleChangeAmount}/>
      <div className="footer">Footer</div>
    </div>
  )
}