// src/pages/ContactUs.js
import React, { useState } from 'react'; 
import { Container, Typography, Grid, TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';
import NavigationBar from '../components/NavigationBar';

const Contact = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <NavigationBar />
      <Container maxWidth="sm" style={{ marginTop: '20px', padding: '30px', border: '1px solid #cccccc', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" style={{ marginBottom: '20px' }}>
          Contact the SwiftJobs Team
        </Typography>
        <Typography paragraph align="center" style={{ marginBottom: '30px' }}>
          We're here to answer your questions. Let's talk!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="agree"
                    color="primary"
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I agree to the terms of use and privacy policy."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: '#2e9b6c', '&:hover': { bgcolor: '#2e9b6c', opacity: 0.7 } }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Contact;