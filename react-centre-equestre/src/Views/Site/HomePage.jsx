import React from 'react';
import Footer from '../../Components/Site/Footer';
import NavbarSite from '../../Components/Site/NavbarSite';
import HomePageComponent from '../../Components/Site/HomePage';

const HomePage = () => {
    return ( 
        <>
            <NavbarSite />
            <HomePageComponent/>
            <Footer />
        </>
     );
}
 
export default HomePage;

