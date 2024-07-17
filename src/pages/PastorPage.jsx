import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import Pastor from '../components/PastorPage/Pastor'
import Motto from '../components/PastorPage/Motto';
const HomePage = () => {
    return (
        <>
            <Pastor/>
            <Motto />
        </>
    );
}

export default HomePage;
