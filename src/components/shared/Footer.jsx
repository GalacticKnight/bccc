import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
const emailIcon = require('../images/email.png');
const facebook = require('../images/facebook.png');
const instagramIcon = require('../images/insta-logo.png');

const Footer = () => {
    return (
        <footer className='projectsSection'>
            <div className='footerBox'>
            <div className='projectsBox contactInfoBox'>
                <h3 className='siteHeadings'>Contact</h3>
                {/* <h6>Let's connect</h6> */}
                <p>I am currently looking for new opportunities, my inbox is always open. If you want to get in touch, talk to me about a project collaboration, or just be friends find me here.</p>
                <p>I really enjoy company.</p>
                <div className='socialsContainer'>
                    
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
