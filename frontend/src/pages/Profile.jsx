// src/pages/Profile.jsx
import React, { useState, useContext } from 'react';
import './Profile.css';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA',
    phone: '123-456-7890',
  });

  const [orders, setOrders] = useState([
    { id: 1, date: '2023-07-01', total: 100.00, status: 'Delivered' },
    { id: 2, date: '2023-06-15', total: 75.50, status: 'Shipped' },
    { id: 3, date: '2023-06-01', total: 50.00, status: 'Processing' },
  ]);

  const handleEditToggle = () => setEditing(!editing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Here you would normally make an API call to update the user profile
    setEditing(false);
    console.log('Profile updated:', user);
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-details">
        {editing ? (
          <form onSubmit={handleUpdateProfile}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Update Profile</button>
          </form>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <button onClick={handleEditToggle}>Edit Profile</button>
          </div>
        )}
      </div>
      <div className="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;

