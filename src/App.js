import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Homepage from './Homepage.js';
import Shop from './Shop.js';
import Contact from './Contact.js';

import MainLayout from './MainLayout.js';
import ShopLayout from './ShopLayout.js';
import ItemList from './ItemList.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />} >
              <Route path='/' element={<Homepage />} />
              <Route path='shop' element={<ShopLayout />} >
                <Route path=':cat' element={<ItemList />} />
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