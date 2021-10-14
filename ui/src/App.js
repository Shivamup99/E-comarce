import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductData from './pages/ProductData';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Cart/>
    </div>
  );
}

export default App;
