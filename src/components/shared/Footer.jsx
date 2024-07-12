import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../static/Footer.css';
const emailIcon = require('../images/email.png');
const facebook = require('../images/facebook.png');
const instagramIcon = require('../images/insta-logo.png');
const Footer = () => {
    return (
        <footer className='projectsSection'>
            <div className='footerBox'>
            <div className='projectsBox contactInfoBox'>
                
                <div className='socialsContainer'>
                {/* <h3 className='siteHeadings'>Contact</h3> */}
                    <div className="d-flex justify-content-center">
                        <h3 className='siteHeadings'>Contact</h3>
                    </div>
                    <img src={emailIcon} onClick={() => window.open('church@gmail.com')} alt="email icon" />
                    <img src={facebook} onClick={() => window.open('facebook.com')} alt="linkedin icon" />
                    <img src={instagramIcon} onClick={() => window.open('https://www.instagram.com')} alt="instagram icon" />
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
