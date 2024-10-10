import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.username}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
