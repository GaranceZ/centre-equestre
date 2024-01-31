import React from 'react';
import Footer from '../../Components/Site/Footer';
import NavbarSite from '../../Components/Site/NavbarSite';
import InstallationComponent from '../../Components/Site/Installations';

const InstallationsPage = () => {
    return ( 
        <>
            <NavbarSite />
            <InstallationComponent/>
            <Footer />
        </>
     );
}
 
export default InstallationsPage;