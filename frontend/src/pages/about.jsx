// src/pages/About.jsx
import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About EcoShop</h1>
        <p>Learn more about our mission and the importance of sustainability</p>
      </header>
      <section className="about-banner">
        <img src="/images/bannerAbout.jpeg" alt="Sustainability Banner" className="about-banner-image" />
      </section>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          EcoShop is dedicated to providing eco-friendly and sustainable products to help you reduce your carbon footprint and promote a healthier planet. We believe that small changes can make a big difference, and we are committed to offering products that align with this vision.
        </p>
        <h2>The Importance of Sustainability</h2>
        <p>
          Sustainability is crucial for the well-being of our planet and future generations. By choosing sustainable products, you are contributing to the reduction of waste, conserving natural resources, and supporting ethical practices. Our range of products is carefully curated to ensure they meet high standards of sustainability and quality.
        </p>
        <h2>Why Choose Us?</h2>
        <p>
          At EcoShop, we prioritize transparency, quality, and customer satisfaction. Our products are sourced from reputable suppliers who share our commitment to sustainability. Join us on our journey to make the world a greener place, one product at a time.
        </p>
      </section>
    </div>
  );
};

export default About;

