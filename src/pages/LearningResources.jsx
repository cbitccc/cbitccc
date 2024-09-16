import React from 'react';
import Navbar from '../components/Navbar';
import './LearningResources.css';
import { Grid, Typography, Box, Link, Card, CardContent, CardMedia } from '@mui/material';

const youtubeChannels = [
  {
    name: 'Channel 1',
    url: 'https://www.youtube.com/channel/URL1',
    image: 'https://via.placeholder.com/150', 
    description: 'Learn about web development, React, and JavaScript programming.',
  },
  {
    name: 'Channel 2',
    url: 'https://www.youtube.com/channel/URL2',
    image: 'https://via.placeholder.com/150', 
    description: 'Explore Python tutorials, data science, and machine learning concepts.',
  },
  {
    name: 'Channel 3',
    url: 'https://www.youtube.com/channel/URL3',
    image: 'https://via.placeholder.com/150', 
    description: 'A deep dive into cybersecurity topics and ethical hacking.',
  },
];

function LearningResources() {
  return (
    <div className="learning-resources">
      <Navbar />
      <div className="resources">
        <Box sx={{ padding: '20px' }}>
          <Typography variant="h4" sx={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
            Learning Resources
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {youtubeChannels.map((channel, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card className="channel-card" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                  <Link href={channel.url} target="_blank" rel="noopener" underline="none">
                    <CardMedia
                      component="img"
                      height="140"
                      image={channel.image}
                      alt={channel.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: '#fff' }}>
                        {channel.name}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: '#ccc' }}>
                        {channel.description}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default LearningResources;
