import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';
const Logo = require('../images/BCCC_logo.png');
const linkStyle = {
    textDecoration: "none"
    
};

const NavBar = () => {
    return (
        <header className='nav-background navbar navbar-expand-md bg-white navbar-white'>
            <div className='navBar container-fluid px-5'>
                <img src={Logo} alt="email icon" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
                    <ul className='navbar-nav'>
                        {/* <li className='nav-item'><a className='nav-link' href="#">Home</a></li> */}
                        <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
                        <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
                        <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
                        <li className='nav-item'><HashLink smooth to='/#anthology' className='nav-link' href="#">Anthology</HashLink></li>
                    </ul>
                </div>
            </div>
        </header>
        
    );
}

export default NavBar;
