import './App.css';
import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout.js';
import Homepage from './components/Homepage.js';
import Contact from './components/Contact.js';

import ShopLayout from './components/ShopLayout.js';
import ItemList from './components/ItemList.js';
import CartLayout from './components/CartLayout.js';

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

function App() {
  const [items, setItems] = useState(baseItems);

  const [total, setTotal] = useState(0);

  const handleAddItem = id => {
    setItems(prevItems => {
      let newItems = JSON.parse(JSON.stringify(prevItems));
      let item = newItems.filter(item => item.id === id)[0];
      item.quantity++;
      return newItems;
    });
  }

  useEffect(() => {
    let newTotal = items.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);
    setTotal(newTotal);
  }, [items]);

  const getItems = cat => {
    if (cat === 'all') return items;
    return items.filter(item => item.cat === cat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout total={total}/>} >
              <Route path='/' element={<Homepage />} />
              <Route path='shop' element={<ShopLayout />} >
                <Route path=':cat' element={<ItemList getItems={getItems} handleAddItem={handleAddItem}/>} />
                <Route path='*' element={<div>DEFAULT PATH after shop</div>} />
              </Route>
              <Route path='cart' element={<CartLayout items={items}/>} />
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;