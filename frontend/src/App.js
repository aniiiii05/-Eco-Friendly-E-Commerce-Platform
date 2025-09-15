// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/Login';
import Signup from './pages/signup';
import Products from './pages/Products';
import EcoFriendlyGadgets from './pages/EcoFriendlyGadgets';
import RecycledApparels from './pages/RecycledApparels';
import OrganicProducts from './pages/OrganicProducts';
import Footer from './components/footer/footer';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact"element={<Contact/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/eco-friendly-gadgets" element={<EcoFriendlyGadgets />} />
        <Route path="/products/recycled-apparels" element={<RecycledApparels />} />
        <Route path="/products/organic-products" element={<OrganicProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;



