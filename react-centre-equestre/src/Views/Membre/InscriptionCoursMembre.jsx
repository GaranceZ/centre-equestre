import React from 'react';
import SidebarMembre from '../../Components/Membre/SidebarMembre';
import InscriptionCoursMembreComponent from '../../Components/Membre/InscriptionCoursMembre';
import '../../Styles/Layout.css'

const InscriptionCoursMembrePage = () => {
    return ( 
        <>
        <div className='layout'>
        <SidebarMembre/>
        <InscriptionCoursMembreComponent/>
        </div>
        </>
     );
}
 
export default InscriptionCoursMembrePage;