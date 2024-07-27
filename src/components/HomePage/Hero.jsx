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
                
                <div className="same">
                    <div>
                        <Link to ='/pastor' class="nav-link" aria-current="page" >
                            <button class="button button1">Pastor</button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <HashLink smooth to ='/#contact' class="nav-link" aria-current="page" >
                            <button class="button button2">Schedule</button>
                        </HashLink>
                    </div>
                </div>
                

                
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
