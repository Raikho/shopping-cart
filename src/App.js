import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Homepage from './Homepage.js';
import Shop from './Shop.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className='header'>
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
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;