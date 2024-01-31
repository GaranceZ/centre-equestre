import React from 'react';
import NavbarSite from '../../Components/Site/NavbarSite';
import Footer from '../../Components/Site/Footer';
import PensionsComponent from '../../Components/Site/PensionsComponent';

const PensionsPage = () => {
    return ( 
        <>
        <NavbarSite />
        <PensionsComponent />
        <Footer />
        </>
     );
}
 
export default PensionsPage;