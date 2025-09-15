// src/pages/Contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please reach out with any questions or feedback.</p>
      </header>
      <section className="contact-banner">
        <img src="/images/category1.jpg"alt="Contact Us Banner" className="contact-banner-image" />
      </section>
      <section className="contact-content">
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 EcoShop St, Sustainable City, Earth</p>
          <p><strong>Email:</strong> contact@ecoshop.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
