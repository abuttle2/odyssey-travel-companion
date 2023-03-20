import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import './Home.css';
import './About.css';
import './ContactUs.css';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
