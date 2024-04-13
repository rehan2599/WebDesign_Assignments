import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Box, IconButton } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddJob() {
    const [jobDetails, setJobDetails] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/user/create/job', jobDetails);
            alert('Job added successfully!');
            setJobDetails({ companyName: '', jobTitle: '', description: '', salary: '' });
        } catch (error) {
            console.error('Failed to add job:', error);
            alert('Error adding job.');
        }
    };

    const handleBack = () => {
        navigate('/admin'); // Assuming '/admin' is the path to your admin dashboard
    };

    return (
        <Container component={Paper} maxWidth="sm" sx={{ mt: 4, p: 4 }}>
            <IconButton onClick={handleBack} sx={{ mb: 2 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" gutterBottom>
                Add Job
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={jobDetails.companyName}
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Job Title"
                    name="jobTitle"
                    value={jobDetails.jobTitle}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Description"
                    name="description"
                    value={jobDetails.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Salary"
                    name="salary"
                    value={jobDetails.salary}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3, mb: 2, backgroundColor: '#2e9b6c', '&:hover': {
                            backgroundColor: '#247856' // Darker shade of green for hover state
                        }
                    }}
                >
                    Add Job
                </Button>
            </Box>
        </Container>
    );
}

export default AddJob;
