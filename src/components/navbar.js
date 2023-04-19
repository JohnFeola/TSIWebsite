// Navbar.js
import React from 'react';
import './navbar.css'; // Optional: import your CSS file
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="TSI-logos.jpeg" alt="Company Logo" className="logo" />
      </div>
      <div className='navbar-name'>
        <h3>Townhouse Sprinklers, Inc.</h3>
        <h5>(410)-812-5540</h5>
        <h6>nfpa13d@yahoo.com</h6>
    </div>
      <ul className="navbar-links">
        <li className="nav-item">
          <a href="#about-us" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#how-sprinklers-work" className="nav-link">How Sprinklers Work</a>
        </li>
        <li className="nav-item">
          <a href="#contact-us" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
