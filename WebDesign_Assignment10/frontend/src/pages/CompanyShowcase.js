import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Container, Paper } from '@mui/material';
import placeholderImg from '../images/placeholder.png';
import NavigationBar from '../components/NavigationBar';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);
  const baseURL = 'http://localhost:5000';
  const placeholderImg = '/path/to/default/image.jpg'; // Define your placeholder image path

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const API_URL = `${baseURL}/user/getAll`;
        const response = await axios.get(API_URL);
        setCompanies(response.data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <>
      <NavigationBar />
      <Container maxWidth="lg">
        <Box py={5}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#424242' }}>
            Company Showcase
          </Typography>
          <Grid container spacing={4}>
            {companies.map((company) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={company._id}>
                <Paper elevation={3} sx={{ borderRadius: 2 }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
                    <CardMedia
                      component="img"
                      image={company.imagePath ? `${baseURL}/${company.imagePath.replace(/\\/g, '/')}` : placeholderImg}
                      alt={company.fullName}
                      sx={{ height: 140, objectFit: 'cover', borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                    />
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'medium' }}>
                        {company.fullName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default CompanyShowcase;
