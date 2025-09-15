// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={handleAddToWishlist}>Add to Wishlist</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
