import React from "react";
import ProfileCard from "./ProfileCard";
import Button from '@mui/material/Button';
import "./OurTeam.css";
import { useNavigate } from 'react-router-dom';

function OurTeam() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/teams');
  };
 

  return (
    <div className="OurTeam">
      <h1>Our Team</h1>
      <div className="Cards">
        <ProfileCard
          name="Manobhiram Reddy"
          position="President"
          imageUrl="assets/2024/president.jpg"
        />
        <ProfileCard
          name="Gayatri K"
          position="Vice President"
          imageUrl="assets/2024/vicepresident.jpg"
        />
        <ProfileCard
          name="Raghupathi A"
          position="General Secretary"
          imageUrl="assets/2024/generalsecretary.jpg"
        />
        <ProfileCard
          name="Kolli Harshitha"
          position="Joint Secretary"
          imageUrl="assets/2024/jointsecretary.jpg"
        />
        <ProfileCard
          name="Bhawdeep"
          position="Joint Secretary"
          imageUrl="assets/2024/jointsecretary2.jpg"
        />
        <ProfileCard
          name="Iruvanti Shravani"
          position="Treasurer"
          imageUrl="assets/2024/treasurer.jpg"
        />
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleRedirect}
        sx={{
          mt: 2,
          borderRadius: '20px',
          textTransform: 'none',
          fontWeight: 'bold',
          boxShadow: 'none',
          animation: 'slideUp 1s ease-in-out',
          ':hover': {
            backgroundColor: '#0056b3',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          }
        }}
        className="show-more-button"
      >
        View All
      </Button>
    </div>
  );
}

export default OurTeam;
