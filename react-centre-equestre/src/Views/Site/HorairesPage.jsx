import React from 'react';
import NavbarSite from '../../Components/Site/NavbarSite';
import Footer from '../../Components/Site/Footer';
import HorairesComponent from '../../Components/Site/HorairesComponent';

const HorairesPage = () => {
    return ( 
        <>
        <NavbarSite />
        <HorairesComponent />
        <Footer />
        </>
     );
}
 
export default HorairesPage;