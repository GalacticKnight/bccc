import React from 'react';
import '../static/Pastor.css';
import pastorImage from "../images/Pastor.jpg";

const Pastor = () => {
    return (
        <section className='darkSection' class="padding">
                <h3 className='siteHeadings'>Pastor Andy Tso</h3>
                <img id = "pastor-image"src={pastorImage} alt="pastor image"/>
                <div className = "aboutSummary">
                    <p> Andy is the Lead Pastor of the Brooklyn Community Christian Church, where he first attended 1974 and baptized 1977. 
                        He preaches in both English and Chinese Worship services. He graduated from NYU (1983) and majored in Economics and 
                        Pre-Med, with Minors in Chinese History and Chemistry. He received his JD from Univ Idaho, and MDiv from Gordon-Conwell 
                        Theological Seminary.
                    </p>
                    <p>He and his wife Hilary left promising careers in law and the university to answer God's call to full-time ministry.</p>
                </div>
        </section>
    );
}

export default Pastor;
