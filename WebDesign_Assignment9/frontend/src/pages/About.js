import React from 'react';
import { Box, Container, Grid, Typography, CardMedia } from '@mui/material';
import aboutImage from '../images/about.png';


const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box py={5}> {/* Adds padding around the content */}
        <Typography variant="h3" gutterBottom align="center">
          About Us
        </Typography>

        <Grid container spacing={4}>
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Connecting Talent with Opportunity
            </Typography>
            <Typography paragraph>
              Welcome to SwiftJobs, where the perfect match between talent and opportunity is made. We understand that finding the right job or the ideal candidate can be a daunting task. That's why we're here to simplify the process and make it as seamless as possible.
            </Typography>
            <Typography paragraph>
              Our mission is simple: to connect talented individuals with their dream jobs and help companies find the perfect fit for their teams. We strive to create a platform where both job seekers and employers can thrive, fostering meaningful connections that drive success and growth.
            </Typography>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image= {aboutImage} // Change to your image path
              alt="About Us"
              style={{ width: '80%', height: '400px' }}
            />
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;