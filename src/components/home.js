// Navbar.js
import React from 'react';
import './home.css';
const Home = () => {
  return (
    <div className='home'>
        <div className='home-paragraph-one'>
            <p>Townhouse Sprinklers has been installing residential fire protection sprinkler systems since 1985. Contact us for a free estimate.</p>
        </div>
        <div className='home-paragraph-two'>
            <ul>We operate in the following locations:
                <li>Baltimore County</li>
                <li>Harford County</li>
                <li>Anne Arundel County</li>
                <li>Baltimore City</li>
                <li>Montgomery County</li>
                <li>Ocean City, MD</li>
                <li>Prince George's County</li>
                <li>etc..</li>
            </ul>
        </div>
        <div className='home-images-of-sprinklers'>
            <div className='home-image-two'>
                <img src='flat-sprinkler-head.jpg'></img>
            </div>
            <div className='home-image-three'>
                <img src='ceiling_sprinkler.jpg'></img>
            </div>
        </div>

        <div className='home-image-five'>
            <img src='detonated-head.jpg'></img>
        </div>
        <div className='home-image-four'>
            <img src='maryland-satellite.jpg'></img>
        </div>
    </div>
  );
};

export default Home;