// Navbar.js
import React from 'react';
import './contactus.css';
const Contact = () => {
  return (
    <div className='contactus'>
        <div className='contactinfo'>
            <h4>________________________________</h4>
            <br></br>
        <h4>Contact Information</h4>
        <br></br>
        <br></br>
        <h5>Phone: 410-812-5540</h5>
        <br></br>
        <h5>Email: 
            <a href='mailto:nfpa13d@yahoo.com' target='_blank' rel="noopener noreferrer"> nfpa13d@yahoo.com</a>
        </h5>
        <h4>________________________________</h4>

        </div>
        <div className='contact-image'>
            <img src='blazemaster-detonated-head.jpeg'></img>
        </div>
    </div>
  );
};

export default Contact;