
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    alert("clicked")
    addToCart(product);
  };

  return (
    <div className="product border p-6 rounded shadow-md flex flex-col justify-between">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="text-md font-semibold">{product.title}</h3>
      <p className="text-green-600 mb-4">${product.price}</p>
      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${product.id}`}
          className="text-white bg-purple-500 hover:bg-gray-600 px-4 py-2 rounded-md transition-all"
        >
          View Details
        </Link>
        <button
          onClick={handleAddToCart}
          className="text-white bg-red-500 hover:bg-green-600 px-4 py-2 rounded-md transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;