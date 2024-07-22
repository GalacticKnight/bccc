import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/Hero.jpg')
import '../static/Hero.css';
const Hero = () => {
    return (
        <section class="hero"id="hero" >
            <h1 class="text-center context ">
                <span id="first">Welcome To</span>
                <br/>
                <span id="second">Brooklyn Christian Community Church</span>
                <br/><br/>
                <button class="btn" >
                    <a href="/pastor">
                    PASTOR</a>
                    
                </button>
                <td width="20px inline"></td>
                <button class="btn">
                <HashLink smooth to ='/#schedule' class="nav-link" aria-current="page" href="#">
                    Schedule
                </HashLink>
                </button>

                
            </h1>
            <br/>
                
            <div class="area" >
            {/* <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
        </section>

            
    );
}

export default Hero;
