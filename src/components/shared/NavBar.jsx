import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../static/Navbar.css'
const Logo = require('../images/BCCC_logo.png');

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { to: '/#hero', text: 'Home' },
        { to: '/#SOF', text: 'Our Beliefs' },
        { to: '/#anthology', text: 'Anthology' },
        { to: '/#footer', text: 'Socials' }
    ];

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
            <div className="container-fluid">
                <img src={Logo} alt="Logo"/>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li 
                                className="nav-item" 
                                key={index}
                                style={{transitionDelay: `${index * 0.1}s`}}
                            >
                                <HashLink 
                                    smooth 
                                    to={item.to} 
                                    className="nav-link"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;