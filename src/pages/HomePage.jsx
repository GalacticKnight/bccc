import React from 'react';
import Hero from '../components/HomePage/Hero';
import Anthology from '../components/HomePage/Anthology';
import BibleVerse from '../components/HomePage/BibleVerse';
import StatementOfFaith from '../components/HomePage/StatementOfFaith';
import TimeOfService from '../components/HomePage/TimesOfService';
import Address from '../components/HomePage/Address';
import Information from '../components/HomePage/Information';

const HomePage = () => {
    return (
        <>
            <Hero/>
            <BibleVerse/>
            <StatementOfFaith/>
            {/* <div className='flex-fod'>
                <Address/>
                <TimeOfService/>
            </div> */}
            <Information/>
            <Anthology/>
        </>
    );
}

export default HomePage;
