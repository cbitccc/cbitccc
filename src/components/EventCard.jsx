import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.css';

function EventCard({ imageUrl, altText, link, overlayText }) {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open(link, '_blank'); 
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img src={imageUrl} alt={altText} className="event-image" />
      <div className="event-overlay">
                <span className="overlay-text">{overlayText}</span>
            </div>
    </div>
  );
}

export default EventCard;
