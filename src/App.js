import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar.jsx';

import { Cart } from './pages/cart/cart.jsx';
import { Shop } from './pages/shop/shop.jsx';
import { Contact } from './pages/contact.jsx';
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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
