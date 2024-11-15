import React from "react";
import Product from "./Product";
import { CartProvider } from "../context/CartContext";

const ProductList = ({ products }) => {
  return (
    <CartProvider>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </CartProvider>
   
  );
};

export default ProductList;