# SwiftJobs Portal

Welcome to the SwiftJobs Portal, a comprehensive job search platform that connects talented individuals with their dream jobs and provides companies with the opportunity to find the perfect candidates.

## Project Setup

To get the project running on your local machine, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/rehan2599/WebDesign_Assignments/tree/main/WebDesign_Assignment9`.
2. Navigate to the project directory with `cd jobs-portal`.
3. Install the necessary dependencies with `npm run install-all`.
4. Start the development server with `npm run start`. This should launch the project on `http://localhost:3000`.

## Structure

The project follows a modular structure for easy navigation and scalability:

- `src/components`: This directory contains reusable components like `NavigationBar`.
- `src/features`: Feature-specific components like `SignInSide`.
- `src/pages`: Page components that represent different routes in the application like `Home`, `About`, `JobListings`, `Contact`, and `CompanyShowcase`.
- `src/model`: Services and utilities like `authService` for API interactions.
- `public`: Public assets like images used across the application.

## Navigation

The application uses React Router for navigation:

- `/`: The root path which is mapped to the `SignInSide` component for user authentication.
- `/home`: The home page of the portal.
- `/about`: Information about the job portal.
- `/job-listings`: Active job listings.
- `/contact`: Contact form for inquiries.
- `/company-showcase`: A gallery of companies participating in the portal.

## Features

- User Authentication: SignIn and SignOut functionalities.
- Dynamic Job Listings: Jobs are listed dynamically with options to apply.
- Company Showcase: A visual gallery of companies.
- Responsive Design: The portal is fully responsive across different devices.
- Search Functionality: Users can search for jobs using keywords and filters.

## Additional Information

- The backend is setup using Node.js and Express, with a MongoDB database.
- The `cors` package is used to handle cross-origin requests.
- `axios` is used for making API requests from the frontend.
- Material-UI library is utilized for the user interface components.

Please refer to individual component files for detailed code documentation.

---



Thank you for visiting SwiftJobs Portal!
