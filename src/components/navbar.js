// Navbar.js
import React from 'react';
import './navbar.css'; // Optional: import your CSS file
import {NavLink} from 'react-router-dom';


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
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/how-sprinklers-work" className="nav-link" activeClassName="active">How Sprinklers Work</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink to="/contact-us" className="nav-link" id='uto' activeClassName="active">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
