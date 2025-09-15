// src/components/footer/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 EcoShop. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="social-media">
          <a href="#"><img src="/images/facebook.jpeg" alt="Facebook" /></a>
          <a href="#"><img src="/images/twitter.avif" alt="Twitter" /></a>
          <a href="#"><img src="/images/instagram.jpg" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
