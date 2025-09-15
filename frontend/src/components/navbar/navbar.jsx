import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar animate__animated animate__fadeInDown">
      <div className="navbar-logo">
        <a href="/">EcoShop</a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      
      </ul>
      <div className="navbar-auth">
      <li><Link to="/wishlist">Wishlist</Link></li>
      <li><Link to="/profile">Profile</Link></li>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;



