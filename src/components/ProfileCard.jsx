import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, position, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="profile-image" />
      </div>
      <div className="profile-details">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-position">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
