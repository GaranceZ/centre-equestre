import React from 'react';
import NavbarSite from '../../Components/Site/NavbarSite';
import Footer from '../../Components/Site/Footer';
import ContactComponent from '../../Components/Site/ContactComponent';

const ContactPage = () => {
    return ( 
        <>
        <NavbarSite/>
        <ContactComponent/>
        <Footer/>
        </>
     );
}
 
export default ContactPage;