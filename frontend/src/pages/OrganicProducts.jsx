// src/pages/OrganicProducts.jsx
import React, { useState } from 'react';
import './Products.css';

const OrganicProducts = () => {
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const products = [
    { id: 1, name: 'Organic Soap', price: 44, image: '/images/soap.jpeg' },
    { id: 2, name: 'Organic Shampoo', price: 35, image: '/images/shampoo.webp' },
    { id: 3, name: 'Organic serum', price: 40, image: '/images/serum.jpeg' },
    { id: 4, name: 'Organic Bodywash', price: 38, image: '/images/bodywash.webp' },
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
      <h1>Organic Products</h1>
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
            <p>${product.price}</p>
            <button className="buy-now">Buy Now</button>
            <button className="wishlist">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicProducts;
