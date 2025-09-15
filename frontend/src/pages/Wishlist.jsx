// src/pages/Wishlist.jsx
import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
