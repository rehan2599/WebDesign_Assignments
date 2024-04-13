import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from './../../images/bg.jpg'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../model/authService';

import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { loginSuccess, loginFail } from '../../actions/authActions'; // Import your action creators


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/rehan-khan2599/">
        SwiftJobs.
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {/* {'.'} */}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch(); // Hook to dispatch actions

  const handleSubmit = async (event) => {
    event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        try {
            const response = await signIn(email, password); 
            console.log(response.type);
            if (response.token && response.userType) {
              dispatch(loginSuccess(response.token, {type: response.userType})); 
              localStorage.setItem('token', response.token); // Store the token
              localStorage.setItem('userType', response.userType); // Store the userType
              navigate(response.userType === 'admin' ? '/admin' : '/home');
            } else {
              // Handle the case where the response does not have the expected fields
              console.error('Unexpected response:', response);
              setError('An error occurred. Please try again.');
            }

        } catch (error) {
            console.error('SignIn error', error);
            dispatch(loginFail(error)); // Dispatch login fail with error
            setError('Invalid email or password.');
        }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${background})`, 
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#59E4A8' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               {/* Error message display */}
              {error && (
                  <Typography color="error" align="center" sx={{ mt: 2 }}>
                      {error} {/* Display error message if sign-in fails */}
                  </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                    mt: 3, 
                    mb: 2,
                    backgroundColor: '#59E4A8', // Custom button color
                    '&:hover': {
                      backgroundColor: '#46b583', // Slightly darker for the hover state
                    },
                  }}
              >
                Sign In
              </Button>

              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
