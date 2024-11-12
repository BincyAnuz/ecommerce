
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
