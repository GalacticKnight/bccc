import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/Hero.jpg')
import '../static/Hero.css';
const Hero = () => {
    return (
        <section class="hero" id="hero">
            <div class="container">
                {/* <div class="btn-group">
                    <button class="btn btn-primary">
                        <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
                    </button>
                </div>
                <div class="btn-group">
                    <button class="btn btn-primary">
                    <li className='nav-item'><HashLink smooth to='/#contact' className='nav-link' href="#">Contact Us</HashLink></li>
                    </button>
                </div> */}
            </div>
        </section>

            
    );
}

export default Hero;
