
# Job Portal App

## Overview

The Job Portal App is a web-based application designed to simplify the job search process for both job seekers and employers. This README.md file provides an overview of the project, including setup instructions, project structure, navigation, and other relevant information.

## Technical Requirements

### Login and Session Management:
- Implemented a login page with stored usernames and passwords.
- Utilized Axios for API calls for authentication and session management.
- Included logout feature for securely ending user sessions.

### Job Portal Pages and Routing:
- Developed 5 main pages using React components and react-router: Home, About, Job Listings, Contact, and Company Showcase.
- Utilized Material UI components for enhanced design.
- Ensured well-structured routing for easy navigation.

### Job Listings with Frontend Data:
- Dynamically listed job positions on Job Listings page, including job role, required skills, and salary.
- Managed frontend data for dynamic listing of jobs, fetched from jobPosts object.

### Company Showcase with Image Gallery:
- Displayed gallery of company images with names on Company Showcase page.
- Sourced images from backend server.

### Material UI Components:
- Integrated Material UI components for consistent and responsive design.
- Used Material UI card component on each page to present information.

### Version Control and Documentation:
- Maintained project in Git repository with .gitignore file.
- Wrote comprehensive README.md detailing project setup, structure, navigation, and relevant information.

### Additional Instructions:
- Used Axios for API requests.
- Showcased expertise in Material UI by leveraging its components throughout the job portal.

## Setup

To set up the Job Portal App locally, follow these steps:

1. **Clone the Repository:**
git clone https://github.com/your-username/job-portal-app.git

2. **Install Dependencies:**
cd job-portal-app
npm install


3. **Start the Server:**
npm start

4. **Access the App:**
Open a web browser and navigate to `http://localhost:3000`

## Project Structure
job-portal-app/
│
├── src/
│ ├── components/
│ │ ├── About.js
│ │ ├── Contact.js
│ │ ├── Home.js
│ │ ├── JobListings.js
│ │ └── CompanyShowcase.js
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── public/
│ ├── index.html
│ └── ...
│
├── .gitignore
├── package.json
└── README.md



## Navigation

- **Home:** Landing page displaying featured job listings and search functionality
- **Job Listings:** Browse job listings by category, location, and keywords
- **Job Details:** View detailed job description, requirements, and application instructions
- **Apply:** Apply for jobs directly through the platform
- **Employer Dashboard:** Access employer features such as posting jobs, managing listings, and reviewing applications
- **Job Seeker Dashboard:** Access job seeker features such as viewing application status, saving favorite job listings, and managing profile

## Technologies Used

- **Frontend:** React.js, Material UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, 
- **Authentication:** Axios




