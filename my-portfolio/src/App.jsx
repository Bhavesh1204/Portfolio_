import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-pink-300 p-4 text-black">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            {/* Navigation Links */}
            <ul className="flex space-x-8 md:space-x-10">
              <li><Link to="/" className="hover:underline text-lg">Home</Link></li>
              <li><Link to="/about" className="hover:underline text-lg">About</Link></li>
              <li><Link to="/projects" className="hover:underline text-lg">Projects</Link></li>
              <li><Link to="/contact" className="hover:underline text-lg">Contact</Link></li>
            </ul>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/Bhavesh1204/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-gray-700" />
              </a>
              <a href="https://www.linkedin.com/in/bhavesh2312/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </nav>

       
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
