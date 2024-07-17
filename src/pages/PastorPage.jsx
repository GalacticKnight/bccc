import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import Pastor from '../components/PastorPage/Pastor'
import Motto from '../components/PastorPage/Motto';
import Family from '../components/PastorPage/Family';
import Fun from '../components/PastorPage/Fun';
const HomePage = () => {
    return (
        <>
            <Pastor/>
            <Motto />
            <Family/>
            <Fun/>
        </>
    );
}

export default HomePage;
