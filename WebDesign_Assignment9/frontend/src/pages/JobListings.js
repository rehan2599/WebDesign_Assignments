import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardHeader,
    Chip,
    CardContent,
    CardActions,
    Box,
    Pagination,
    createTheme,
    InputAdornment,
    IconButton
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e9b6c',
    },
  },
});

const allJobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    role: 'Full Stack Developer',
    description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    salary: '$80,000 - $100,000 per year',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    role: 'Frontend Developer',
    description: 'We are seeking a talented Frontend Developer to join our team. You will be responsible for implementing visual elements that users see and interact with in a web application.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    salary: '$70,000 - $90,000 per year',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/frontend-developer',
  },
  {
    id: 3,
    title: 'Backend Developer',
    role: 'Backend Developer',
    description: 'We are looking for a Backend Developer to join our team. You will be responsible for designing and implementing server-side web application logic as well as integrating front-end elements into the application.',
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful API'],
    salary: '$75,000 - $95,000 per year',
    lastUpdated: 'Last updated 3 days ago',
    applyLink: 'https://example.com/apply/backend-developer',
  },
  {
    id: 4,
    title: 'Software Engineer',
    role: 'Software Engineer',
    description: 'We are hiring a Software Engineer to join our development team. You will collaborate with cross-functional teams to define, design, and ship new features.',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Agile'],
    salary: '$85,000 - $110,000 per year',
    lastUpdated: 'Last updated 4 days ago',
    applyLink: 'https://example.com/apply/software-engineer',
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    role: 'UI/UX Designer',
    description: 'We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI/UX skills, and be able to translate high-level requirements into interaction flows and artifacts.',
    skills: ['Adobe XD', 'Figma', 'User Research', 'Wireframing'],
    salary: '$60,000 - $80,000 per year',
    lastUpdated: 'Last updated 5 days ago',
    applyLink: 'https://example.com/apply/ui-ux-designer',
  },
  {
    id: 6,
    title: 'Data Scientist',
    role: 'Data Scientist',
    description: 'We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights.',
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
    salary: '$90,000 - $120,000 per year',
    lastUpdated: 'Last updated 6 days ago',
    applyLink: 'https://example.com/apply/data-scientist',
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    role: 'DevOps Engineer',
    description: 'We are hiring a DevOps Engineer to help us build and maintain functional systems that improve customer experience. You will be responsible for deploying product updates, identifying production issues, and implementing integrations that meet customer needs.',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    salary: '$90,000 - $110,000 per year',
    lastUpdated: 'Last updated 7 days ago',
    applyLink: 'https://example.com/apply/devops-engineer',
  },
  {
    id: 8,
    title: 'Product Manager',
    role: 'Product Manager',
    description: 'We are seeking a Product Manager to guide the success of a product and lead the cross-functional team that is responsible for improving it. The ideal candidate should have a blend of business and technical savvy, a big-picture vision, and the drive to make that vision a reality.',
    skills: ['Product Management', 'Agile', 'Market Research', 'Strategy'],
    salary: '$100,000 - $130,000 per year',
    lastUpdated: 'Last updated 8 days ago',
    applyLink: 'https://example.com/apply/product-manager',
  },
  {
    id: 9,
    title: 'QA Engineer',
    role: 'QA Engineer',
    description: 'We are looking for a QA Engineer to develop and execute exploratory and automated tests to ensure product quality. The QA Engineer will work closely with our software development team to ensure high-quality software releases.',
    skills: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Tracking'],
    salary: '$70,000 - $90,000 per year',
    lastUpdated: 'Last updated 9 days ago',
    applyLink: 'https://example.com/apply/qa-engineer',
  },
  {
    id: 10,
    title: 'System Administrator',
    role: 'System Administrator',
    description: 'We are hiring a System Administrator to maintain, upgrade, and manage our software, hardware, and networks. Resourcefulness is a necessary skill in this role, and the ideal candidate should be able to diagnose and resolve problems quickly and have excellent organizational skills.',
    skills: ['Linux', 'Networking', 'Scripting', 'Troubleshooting'],
    salary: '$75,000 - $95,000 per year',
    lastUpdated: 'Last updated 10 days ago',
    applyLink: 'https://example.com/apply/system-administrator',
  },
  {
    id: 11,
    title: 'Network Engineer',
    role: 'Network Engineer',
    description: 'We are seeking a Network Engineer to design, implement, maintain, and support our growing network infrastructure. You will be part of a systems engineering team that is responsible for designing and developing scalable, maintainable, and highly available network architectures.',
    skills: ['Cisco', 'Routing', 'Switching', 'Firewalls'],
    salary: '$80,000 - $100,000 per year',
    lastUpdated: 'Last updated 11 days ago',
    applyLink: 'https://example.com/apply/network-engineer',
  },
  {
    id: 12,
    title: 'Technical Writer',
    role: 'Technical Writer',
    description: 'We are looking for a Technical Writer to produce high-quality documentation that contributes to the overall success of our products. You will work collaboratively with developers, quality engineers, product managers, and usability experts to make our products easier to use.',
    skills: ['Technical Writing', 'Documentation Tools', 'Editing', 'Communication'],
    salary: '$60,000 - $80,000 per year',
    lastUpdated: 'Last updated 12 days ago',
    applyLink: 'https://example.com/apply/technical-writer',
  },
  {
    id: 13,
    title: 'Project Manager',
    role: 'Project Manager',
    description: 'We are hiring a Project Manager to lead our projects from inception to completion. The Project Manager will be responsible for planning, overseeing, and leading projects from ideation through to completion while ensuring they are completed on time and within budget.',
    skills: ['Project Management', 'Leadership', 'Budgeting', 'Risk Management'],
    salary: '$90,000 - $110,000 per year',
    lastUpdated: 'Last updated 13 days ago',
    applyLink: 'https://example.com/apply/project-manager',
  },
  {
    id: 14,
    title: 'Business Analyst',
    role: 'Business Analyst',
    description: 'We are seeking a Business Analyst to join our team. The Business Analyst will work closely with stakeholders to identify business needs, analyze processes, and provide data-driven recommendations for improvements.',
    skills: ['Business Analysis', 'Requirements Gathering', 'Data Analysis', 'Reporting'],
    salary: '$80,000 - $100,000 per year',
    lastUpdated: 'Last updated 14 days ago',
    applyLink: 'https://example.com/apply/business-analyst',
  },
  {
    id: 15,
    title: 'Sales Manager',
    role: 'Sales Manager',
    description: 'We are looking for a Sales Manager to lead our sales team. The Sales Manager will be responsible for developing and implementing sales strategies to achieve sales targets and expand our customer base.',
    skills: ['Sales Management', 'Negotiation', 'Customer Relationship Management', 'Market Analysis'],
    salary: '$100,000 - $120,000 per year',
    lastUpdated: 'Last updated 15 days ago',
    applyLink: 'https://example.com/apply/sales-manager',
  },
];


  const JobListings = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1); // Reset page to 1 when the search query changes
    };
  
    const handleSearchSubmit = (event) => {
      event.preventDefault();
      console.log('Search query:', searchQuery);
      // Implement search functionality
      // For now, let's log the filtered results to the console
      const filteredJobs = allJobPosts.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('Filtered jobs:', filteredJobs);
    };
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
  
    return (
      <ThemeProvider theme={theme}>
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
            {allJobPosts
              .filter(job => 
                job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                job.description.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage)
              .map((job) => (
                <Grid item xs={12} sm={6} lg={4} key={job.id}>
                  <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                      title={job.title}
                      titleTypographyProps={{ variant: 'h6' }}
                      subheader={job.lastUpdated}
                      sx={{ borderBottom: '1px solid #eeeeee' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <strong>Role:</strong> {job.role}
                      <br />
                      <strong>Skills:</strong> {job.skills.join(', ')}
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
              count={Math.ceil(
                allJobPosts
                  .filter(job => 
                    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    job.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .length / jobsPerPage
              )}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Container>
      </ThemeProvider>
    );
  };

export default JobListings;
