import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Homepage from './Homepage.js';
import Shop from './Shop.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className='header'>
          <NavLink to="/" style={styleNavLink}>Home</NavLink>
          <NavLink to="shop" style={styleNavLink}>Shop</NavLink>
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='shop' element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

function styleNavLink({isActive}) {
  return {color: isActive ? 'lightblue' : 'gray'};
};
