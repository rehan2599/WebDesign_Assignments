import React from 'react';
import { Typography, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import heroBackgroundImage from '../images/asset.jpg';
import NavigationBar from '../components/NavigationBar'; // Adjust the path as necessary

const FullPageBackground = styled('div')({
  backgroundImage: `url(${heroBackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
});

const SearchArea = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  width: '100%',
  maxWidth: '500px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#2e9b6c',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
  },
});

function Home() {
  const navigate = useNavigate();

  const handleFindJobClick = () => {
    navigate('/jobs');
  };

  return (
    <>
      <NavigationBar /> {/* Render the NavigationBar */}
      <FullPageBackground>
        <Typography variant="h2" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Looking for a JOB?
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', mb: 4 }}>
          There's no better place to start.
        </Typography>
        <SearchArea>
          <StyledTextField
            placeholder="Search for Jobs"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <StyledButton onClick={handleFindJobClick}>
                  <SearchIcon />
                </StyledButton>
              ),
            }}
          />
        </SearchArea>
      </FullPageBackground>
    </>
  );
}

export default Home;
