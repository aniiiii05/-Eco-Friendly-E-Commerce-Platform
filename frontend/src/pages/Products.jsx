// src/pages/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsOverview.css';

const Products = () => {
  return (
    <div className="products-overview">
      <h1>Our Products</h1>
      <div className="categories">
        <div className="category">
          <Link to="/products/eco-friendly-gadgets">
            <img src="/images/category1.jpg" alt="Eco-Friendly Gadgets" />
            <h2>Eco-Friendly Gadgets</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/products/recycled-apparels">
            <img src="/images/category2.webp" alt="Recycled Apparels" />
            <h2>Recycled Apparels</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/products/organic-products">
            <img src="/images/category3.jpg" alt="Organic Products" />
            <h2>Organic Products</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
