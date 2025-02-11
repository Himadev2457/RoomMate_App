import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Shimmer from './components/shimmer';
import Home from './components/body/js/home';
// import Final from './components/wrapper/final';
import Hostel from './components/body/js/hostel';
import Layout from './components/Layout';
import About from './components/body/js/about';
import Report from './components/body/js/report';
import NotFound from './components/body/js/notfound';

const App = () => {
  return (
    <Router>
  <Routes>
    {/* Default route (change it if necessary) */}
    <Route path="/" element={<Signup />} /> 

    {/* Authentication Routes */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    {/* Protected Routes with Layout */}
    <Route path="/shimmer" element={<Layout><Shimmer /></Layout>} />
    <Route path="/home/*" element={<Layout><Home /></Layout>} />
    <Route path="/hostel/:hostelName" element={<Layout><Hostel /></Layout>} />
    <Route path="/about" element={<Layout><About /></Layout>} />
    <Route path="/report" element={<Layout><Report /></Layout>} />

    {/* Catch-all route for 404 */}
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router>

  );
};

export default App;
