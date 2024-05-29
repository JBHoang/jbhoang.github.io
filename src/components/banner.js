import React from 'react';
import '../App.css';
import './banner.css';
import profileImage from '../img/JasonPhoto.JPG'

function banner() {
  return (
    <div className='banner'>
        {
          <div className='banner'>
            <div className="profile-photo">
                 <img className="portrait" src ={profileImage} alt="profile-image" />
             </div>

             <div className='biography'>
                 <h1>HELLO THERE, WELCOME TO MY SITE</h1> 
                 <p>
                 I'm Jason Hoang
                 <br></br>
                 <em>A SFU Computer Science Graduate</em>
                 <br></br>
                 & Emergency Paramedic
                 </p> 
            </div>
         </div>
        }
        
    </div>
    
  );
}

export default banner;