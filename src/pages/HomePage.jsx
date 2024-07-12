import React from 'react';
import Hero from '../components/HomePage/Hero';
import Anthology from '../components/HomePage/Anthology';
import BibleVerse from '../components/HomePage/BibleVerse';
import StatementOfFaith from '../components/HomePage/StatementOfFaith';
// import About from '../components/HomePage/About';
import Contact from '../components/HomePage/Contact';
import TimeOfService from '../components/HomePage/TimesOfService';

const HomePage = () => {
    return (
        <>
            <Hero/>
            <BibleVerse/>
            <StatementOfFaith/>
            <div className='flex-fod'>
                <Contact/>
                <TimeOfService/>
            </div>
            <Anthology/>
        </>
    );
}

export default HomePage;
