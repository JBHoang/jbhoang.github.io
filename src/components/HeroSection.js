import React from 'react';
import '../App.css';
import './HeroSection.css';
import profileImage from '../img/JasonPhoto.JPG'

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='hero-container'>
            <h1>HELLO THERE, WELCOME TO MY SITE</h1> 
            <p>
            I'm Jason Hoang
            <br></br>
            <em>
            A SFU Computer Science Graduate
            </em>
            <br></br>
            & Emergency Paramedic
            </p> 
            </div>
        
        <div className="profile-photo">
            <img src ={profileImage} alt="profile-image" />
        </div>
    </div>
    
  );
}

export default HeroSection;