import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link 
            to="/" 
            className="text-black hover:text-green-300 transition-colors text-xl"
          >
            Home
          </Link>
          <Link 
            to="/product" 
            className="text-black hover:text-green-300 transition-colors text-xl"
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-black hover:text-green-300 transition-colors text-xl"
          >
            About Us
          </Link>
        </div>
        <Link 
          to="/cart" 
          className="text-black hover:text-green-300 transition-colors text-xl"
        >
         🛒 Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;