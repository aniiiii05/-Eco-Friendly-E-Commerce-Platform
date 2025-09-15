// src/pages/EcoFriendlyGadgets.jsx
import React, { useState } from 'react';
import './Products.css';

const EcoFriendlyGadgets = () => {
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const products = [
    { id: 1, name: 'Bamboo CottonBuds', price: 50, image: '/images/bamboocottonbuds.jpg' },
    { id: 2, name: 'wooden comb', price: 20, image: '/images/woodencomb.jpeg' },
    { id: 3, name: 'Bamboo toothbrush', price: 20, image: '/images/bambootoothbrush.webp' },
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
      <h1>Eco-Friendly Gadgets</h1>
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

export default EcoFriendlyGadgets;
