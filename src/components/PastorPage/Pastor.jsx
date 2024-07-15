import React from 'react';
import '../static/Pastor.css';
import pastorImage from "../images/Pastor.jpg";

const Pastor = () => {
    return (
        <section className='darkSection' id='about'>
                <h3 className='siteHeadings'>Pastor Andy Tso</h3>
                <img id = "pastor-image"src={pastorImage} alt="pastor image"/>
        </section>
    );
}

export default Pastor;
