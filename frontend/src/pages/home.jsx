// src/pages/Home.jsx
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home animate__animated animate__fadeIn">
      <header className="home-header">
        <h1>Welcome to EcoShop</h1>
        <p>Your one-stop shop for sustainable products</p>
      </header>
      <section className="home-banner">
        <img src="/images/banner.png" alt="Eco-friendly products" className="banner-image" />
      </section>
      <section className="home-content">
        <div className="home-category">
          <img src="/images/category1.jpg" alt="Category 1" />
          <h2>Eco-friendly Gadgets</h2>
          <p>Discover our range of eco-friendly gadgets that help you reduce your carbon footprint.</p>
        </div>
        <div className="home-category">
          <img src="/images/category2.webp" alt="Category 2" />
          <h2>Recycled Apparel</h2>
          <p>Stylish and sustainable apparel made from recycled materials.</p>
        </div>
        <div className="home-category">
          <img src="/images/category3.jpg" alt="Category 3" />
          <h2>Organic Products</h2>
          <p>Explore our selection of organic products for a healthier lifestyle.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
