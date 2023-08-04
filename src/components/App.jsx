import React from 'react';
import { useState, useEffect, useContext, createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './App.css';
import ItemList from './ItemList'
import MainLayout from './MainLayout';
import Homepage from './Homepage';
import ShopLayout from  './ShopLayout';
import CartLayout from './CartLayout';

const startingItems = [
  {name: 'Betta', cat: 'fresh', price: 9, id: uuid(), img: 'betta', quantity: 0},
  {name: 'Oscar', cat: 'fresh', price: 3, id: uuid(), img: 'oscar', quantity: 0},
  {name: 'Discus', cat: 'fresh', price: 5, id: uuid(), img: 'discus', quantity: 0},
  {name: 'Clownfish', cat: 'salt', price: 3, id: uuid(), img: 'clown-fish', quantity: 0},
  {name: 'Blue Tang', cat: 'salt', price: 4, id: uuid(), img: 'blue-tang', quantity: 0},
  {name: 'Angel Fish', cat: 'salt', price: 6, id: uuid(), img: 'angel-fish', quantity: 0},
  {name: 'Fish Bowl', cat: 'supplies', price: 18, id: uuid(), img: 'fish-bowl', quantity: 0},
  {name: 'Decoration', cat: 'supplies', price: 10, id: uuid(), img: 'decoration', quantity: 0},
];

export const ItemsContext = createContext(null);

export default function App({ baseItems = startingItems }) {
  const [items, setItems] = useState(baseItems);
  const [total, setTotal] = useState(0); // TODO: remove this state

  useEffect(() => {
    let newTotal = items.reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);
    setTotal(newTotal);
  }, [items]);

  const handleChangeAmount = (id, change) => {
    setItems(prevItems => {
      let newItems = JSON.parse(JSON.stringify(prevItems));
      let item = newItems.filter(item => item.id === id)[0];
      item.quantity += change;
      return newItems;
    });
  };

  const handleReset = () => {
    setItems(prevItems => {
      let newItems = JSON.parse(JSON.stringify(prevItems));
      newItems.forEach(item => item.quantity = 0);

      return newItems;
    });
  }

  const getItems = cat => {
    if (cat === 'all') return items;
    if (cat === 'cart') return items.filter(item => item.quantity > 0);
    return items.filter(item => item.cat === cat);
  };

  const getNumCart = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };
  const getTotalCart = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <MainLayout total={total}/>,
      children: [
        {index: true, element: <Homepage />},
        {path: "contact", element: <div>CONTACT</div>},
        {
          path: "shop/cart",
          element: <CartLayout total={total} onReset={handleReset}/>,
          children: [
            {
              index: true,
              element: <ItemList isCart="true" getItems={() => getItems('cart')} onChangeAmount={handleChangeAmount} />,
            },
          ]
        },
        {
          path: "shop", 
          element: <ShopLayout />,
          children: [
            {index: true, element: <ItemList getItems={getItems} onChangeAmount={handleChangeAmount} />},
            {path: ":cat", element: <ItemList getItems={getItems} onChangeAmount={handleChangeAmount} />},
          ],
        },
      ],
    }
  ]);

  return (
    <div className="App">
      <ItemsContext.Provider value={{ items, getNumCart, getTotalCart }}>
        <RouterProvider router={router} />
      </ItemsContext.Provider>
    </div>
  )
}