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
            <Route path='/' element={<MainLayout />} >
              <Route path='/' element={<ShopLayout />} >
                <Route path='/' element={<ItemList />} />
              </Route>
            </Route>
          </Routes>
{/* <div className='header'>
            <div className="store-title">The Clothes Store</div>
            <div className="nav-container">
              <NavLink to="/">Home</NavLink>
              <NavLink to="shop">Shop</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <div className="cart">Cart</div>
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='shop' element={<Shop />} />
            <Route path='contact' element={<Contact />} />
          </Routes> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;