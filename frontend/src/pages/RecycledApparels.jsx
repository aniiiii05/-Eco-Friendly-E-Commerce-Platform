// src/pages/RecycledApparels.jsx
import React, { useState } from 'react';
import './Products.css';

const RecycledApparels = () => {
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const products = [
    { id: 1, name: 'Recycled T-Shirt', price: 54, size: 'M', image: '/images/tshirt1.jpeg' },
    { id: 2, name: 'Recycled Jacket', price: 80, size: 'L', image: '/images/jacket.webp' },
    // Add more products...
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="products-container">
      <h1>Recycled Apparels</h1>
      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Size: {product.size}</p>
            <p>${product.price}</p>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecycledApparels;
