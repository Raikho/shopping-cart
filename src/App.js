import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './Homepage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
      </header>
    </div>
  );
}

export default App;
