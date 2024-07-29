
import React, { useEffect, useState } from "react";
import {HashLink} from 'react-router-hash-link';
import '../static/Navbar.css'
import Hamburger from './Hamburger';
const Logo = require('../images/BCCC_logo.png');
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
        
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbar-scroll" data-mdb-navbar-init>
            {/* <div class="container-fluid"> */}
                <img src={Logo}/>
                <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01"  aria-expanded="false" aria-label="Toggle navigation" onClick={toggleHamburger}>
                    <span class="d-flex justify-content-start align-items-center">
                        <i class="fas fa-bars"> </i>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </span>
                </button>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
                <div class="navigation" id="navbarExample01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="divider"></div>
                        <li class="nav-item active">
                            <HashLink smooth to ='/#hero' class="nav-link" aria-current="page" href="#" onClick={toggleHamburger}>Home</HashLink>
                        </li>
                        <div className="divider"></div>
                        <li class="nav-item active">
                            <HashLink smooth to ='/#SOF' class="nav-link" aria-current="page" href="#" onClick={toggleHamburger}>Our Beliefs</HashLink>
                        </li>
                        <div className="divider"></div>
                        <li class="nav-item">
                            <HashLink smooth to ='/#anthology' class="nav-link" aria-current="page" href="#" onClick={toggleHamburger}>Anthology</HashLink>
                        </li>
                        <div className="divider"></div>
                        <li class="nav-item">
                            <HashLink smooth to ='/#footer' class="nav-link" aria-current="page" href="#" onClick={toggleHamburger}>Socials</HashLink >
                        </li>
                    </ul>
                </div>
            {/* </div> */}
            </nav>
            <style jsx>{`
                
                .navigation{
                    width: 100%;
                    height: 50px;
                }
                .navigation ul{
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 0px;
                }
                .hamburger{
                    display: none;
                    z-index: 6;
                } 
                @media (max-width: 967px){
                    .hamburger{
                        display:fixed;
                        padding-top: 1px;
                        margin-left: 1npmpx;
                        z-index: 6;
                    }
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 40vh;
                        width: 100%;
                        margin-top: 50px;
                        position: fixed;

                    }
                }
            `}</style>
        </>
    );
}


export default NavBar;
{/*         // <header className='navbar navbar-expand-md bg-white navbar-white'>
        //     <div className='navBar container-fluid px-5'>
        //         <img src={Logo} className='logo'/>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
        //             <ul className='navbar-nav'>
        //                 <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
        //                 <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
        //                 <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
        //                 <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
        //             </ul>
        //         </div>
        //     </div>
        // </header> */}
