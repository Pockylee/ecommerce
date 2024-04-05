import React from 'react';
import ProductList from './components/ProductList.js';
import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar.jsx';

import { Cart } from './pages/cart/cart.jsx';
import { Shop } from './pages/shop/shop.jsx';
import { ShopContextProvider } from './context/shop-context.js';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
