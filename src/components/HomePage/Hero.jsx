import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/Hero.jpg')
import '../static/Hero.css';
const Hero = () => {
    return (
        <section class="hero" id="hero">
            <div class="container">
            <div class="btn-group">
                <button class="btn btn-primary">
                    <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
                    {/* <!-- <ion-icon name="play-circle"></ion-icon> --> */}
                </button>
                {/* <button><a href="https://forms.gle/kVmB9CahkDHVXr796" class="btn btn-secondary"><b>Sign Up</b></a></button> */}
            </div>
            <div class="btn-group">
                <button class="btn btn-primary">
                <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
                {/* <!-- <ion-icon name="play-circle"></ion-icon> --> */}
                </button>
                {/* <button><a href="https://forms.gle/kVmB9CahkDHVXr796" class="btn btn-secondary"><b>Sign Up</b></a></button> */}
            </div>
            </div>
        </section>

            
    );
}

export default Hero;
