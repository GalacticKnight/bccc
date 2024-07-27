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
                
                <button class="button button1">
                    Black
                </button>
                <div class="divider"/>
                <HashLink smooth to ='/#schedule' class="nav-link" aria-current="page" class="flash">
                    
                    <button class="button button2">Schedule</button>
                </HashLink>
                

                
                {/* <td width="20px"></td> */}

                
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
