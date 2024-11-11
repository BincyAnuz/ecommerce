import React from 'react';
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import ProductDetails from './Components/ProductDetails';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
   
     <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>

   
  );
}

export default App;
