import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';     // Home component
import About from './pages/About';   // Example About component
import Contact from './pages/Contact'; // Example Contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home route */}
        <Route path="/about" element={<About />} />     {/* About route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
      </Routes>
    </Router>
  );
}

export default App;
