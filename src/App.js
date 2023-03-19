import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Navbar.css';
import './Home.css';

import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import ContactUs from './ContactUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
