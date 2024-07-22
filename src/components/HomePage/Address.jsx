import React from 'react';
import '../static/TOS.css';
import Map from '../images/map.jpg'; 
import '../static/Address.css';
const Contact = () => {
    return (
        <section className='darkSection contact' id='contact'>
            
            <div className='aboutSummary'>
                <img src={Map} className="roundi"></img>
                <p>Address:</p>
                <p>2287 East 15th St.</p>
                <p>Brooklyn, NY 11229</p>
            </div>
        </section>
    );
}

export default Contact;
