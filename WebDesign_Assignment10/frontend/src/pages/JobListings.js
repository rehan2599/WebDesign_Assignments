import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Box,
    Pagination,
    Chip
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e9b6c',
    },
  },
});

function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/get/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const filteredJobs = jobs.filter(job => 
    (job.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
     job.description?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box component="form" onSubmit={handleSearchSubmit} noValidate sx={{ mt: 1, mb: 4, display: 'flex', height: '40px', alignItems: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 2, height: '55px' }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Box>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {filteredJobs
            .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
            .map((job) => (
              <Grid item xs={12} sm={6} lg={4} key={job._id}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardHeader
                    title={job.jobTitle}
                    titleTypographyProps={{ variant: 'h6' }}
                    subheader={job.lastUpdated}
                    sx={{ borderBottom: '1px solid #eeeeee' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <strong>Company:</strong> {job.companyName}
                      <br />
                      
                      <strong>Salary:</strong> {job.salary}
                      <br />
                      <br />
                      {job.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                    <Button size="small" variant="outlined" href={job.applyLink}>
                      Learn More
                    </Button>
                    <Chip label="Apply" clickable color="primary" onClick={() => window.location.href = job.applyLink} />
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={Math.ceil(filteredJobs.length / jobsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default JobListings;
