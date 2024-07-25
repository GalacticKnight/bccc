import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../static/Footer.css';
import Contact from '../HomePage/Contact';
const emailIcon = require('../images/email.png');
const facebook = require('../images/facebook.png');
const instagramIcon = require('../images/insta-logo.png');
const youtubeIcon = require('../images/youtube-icon.png');
const Footer = () => {
    return (
        <footer className='projectsSection' id="footer">
            <div className='footerBox'>
                <div className='projectsBox contactInfoBox'>
                    
                    <div className='socialsContainer'>
                    {/* <h3 className='siteHeadings'>Contact</h3> */}
                        <div className="d-flex justify-content-center">
                            <h3 className='siteHeadings'>Socials</h3>
                        </div>
                        <img src={emailIcon} onClick={() => window.open('church@gmail.com')} alt="email icon" />
                        <img src={instagramIcon} onClick={() => window.open('https://www.instagram.com/bccc_ig')} alt="instagram icon" />
                        <img src={youtubeIcon} onClick={() => window.open('https://www.youtube.com/@bcccvideos7178')} alt="youtube icon" />
                        <Contact/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
