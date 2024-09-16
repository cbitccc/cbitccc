import React from 'react';
import EventCard from './EventCard';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './HomeEvents.css';

function HomeEvents() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/events');
  };
  return (
    <div className="home-events">
      <h1>Past Events</h1>
      <div className="events-container">
        <EventCard
          imageUrl="assets/Events/EthicalHacking.png"
          altText="Ethical Hacking Event"
          link="https://www.instagram.com/p/C5n1ENkhWQG/?img_index=1" 
          overlayText="Ethical Hacking Workshop"
        />
        <EventCard
          imageUrl="assets/Events/InformationSecurity.png"
          altText="Another Event"
          link="https://www.instagram.com/p/CyYl6rgBd5m/" 
          overlayText="Information Security Workshop"
        />
        <EventCard
          imageUrl="assets/Events/Tectasy.png"
          altText="Another Event"
          link="https://www.instagram.com/p/C3T9ZwkhS7J/" 
          overlayText="Tectasy"
        />
        <EventCard
          imageUrl="assets/Events/IDCSS.png"
          altText="Another Event"
          link="https://www.instagram.com/p/Cw5KSGTI3wH/?img_index=1" 
          overlayText="IDCSS"
        />
      </div>
      <Button 
  variant="contained" 
  color="primary" 
  onClick={handleRedirect}
  sx={{
    mt: 2,
    borderRadius: '30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: '10px 20px',
    backgroundColor: '#001f3f', 
    color: '#ffffff', 
    boxShadow: '0px 4px 10px rgba(0, 31, 63, 0.5)', 
    ':hover': {
      backgroundColor: '#004080', 
      boxShadow: '0px 6px 15px rgba(0, 64, 128, 0.7)',
      transform: 'scale(1.05)', 
    },
    transition: 'transform 0.2s ease-in-out',
  }}
  className="show-more-button"
>
  Show All
</Button>

    </div>
  );
}

export default HomeEvents;
