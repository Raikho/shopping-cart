import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Header from './Header'
import ItemList from './ItemList'

const startingItems = [
  {name: 'Betta', cat: 'fresh', price: 9, id: uniqid(), img: 'betta', quantity: 0},
  {name: 'Oscar', cat: 'fresh', price: 3, id: uniqid(), img: 'oscar', quantity: 0},
  {name: 'Discus', cat: 'fresh', price: 5, id: uniqid(), img: 'discus', quantity: 0},
  {name: 'Clownfish', cat: 'salt', price: 3, id: uniqid(), img: 'clown-fish', quantity: 0},
  {name: 'Blue Tang', cat: 'salt', price: 4, id: uniqid(), img: 'blue-tang', quantity: 0},
  {name: 'Angel Fish', cat: 'salt', price: 6, id: uniqid(), img: 'angel-fish', quantity: 0},
  {name: 'Fish Bowl', cat: 'supplies', price: 18, id: uniqid(), img: 'fish-bowl', quantity: 0},
  {name: 'Decoration', cat: 'supplies', price: 10, id: uniqid(), img: 'decoration', quantity: 0},
];

export default function App({ baseItems = startingItems }) {
  const [items, setItems] = useState(baseItems);
  const [total, setTotal] = useState(0);

  const handleChangeAmount = (id, change) => {
    setItems(prevItems => {
      let newItems = JSON.parse(JSON.stringify(prevItems));
      let item = newItems.filter(item => item.id === id)[0];
      item.quantity += change;
      return newItems;
    });
  };

  useEffect(() => {
    let newTotal = items.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);
    setTotal(newTotal);
  }, [items]);

  return (
    <div className="App">
      <Header title="Fish Supply" total={20}/>
      <ItemList items={items} onChangeAmount={handleChangeAmount}/>
      <div className="footer">Footer</div>
    </div>
  )
}