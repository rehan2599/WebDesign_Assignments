// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SignInSide from './features/auth/SignInSide';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobListings from './pages/JobListings';
import CompanyShowcase from './pages/CompanyShowcase';
import AdminPage from './pages/AdminPage';
import AddJob from './pages/AddJob';

import { useSelector } from 'react-redux';

const Layout = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  if (!isAuthenticated) {
      return <Navigate to="/" replace />;
  }

  // Automatically redirect based on user type
  if (user.type === 'admin') {
      return <Navigate to="/admin" replace />;
  } else if (user.type === 'employee') {
      return <Navigate to="/home" replace />;
  }

  // Default redirection if no valid user type is found
  return <Navigate to="/" replace />;
}

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInSide />} />
      <Route path="*" element={<Layout />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/add-job" element={<AddJob />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/jobs" element={<JobListings />} />
      <Route path="/companies" element={<CompanyShowcase />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;