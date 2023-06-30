import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import uniqid from 'uniqid';
import Homepage from './Homepage.js';
import Shop from './Shop.js';
import Contact from './Contact.js';

import MainLayout from './MainLayout.js';
import ShopLayout from './ShopLayout.js';
import ItemList from './ItemList.js';

function App() {
  const [items, setItems] = useState([
    {name: 'Betta', cat: 'fresh', price: 9, id: uniqid(), img: 'betta'},
    {name: 'Oscar', cat: 'fresh', price: 3, id: uniqid(), img: 'oscar'},
    {name: 'Discus', cat: 'fresh', price: 5, id: uniqid(), img: 'discus'},
    {name: 'Clownfish', cat: 'salt', price: 3, id: uniqid(), img: 'clown-fish'},
    {name: 'Blue Tang', cat: 'salt', price: 4, id: uniqid(), img: 'blue-tang'},
    {name: 'Angel Fish', cat: 'salt', price: 6, id: uniqid(), img: 'angel-fish'},
    {name: 'Fish Bowl', cat: 'supplies', price: 18, id: uniqid(), img: 'fish-bowl'},
    {name: 'Decoration', cat: 'supplies', price: 10, id: uniqid(), img: 'decoration'},
  ]);

  const [total, setTotal] = useState(0);

  const handleAddItem = id => {
    let item = items.filter(item => item.id === id)[0];
    console.log('trying to add item:', item);
    setTotal(total + item.price);
  }

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
              <Route path='contact' element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;