import React from 'react';
import SidebarMembre from '../../Components/Membre/SidebarMembre';
import CoursMembreComponent from '../../Components/Membre/CoursMembreComponent';
import '../../Styles/Layout.css'

const CoursMembrePage = () => {
    return ( <>
    <div className='layout'>
        <SidebarMembre/>
        <CoursMembreComponent/>
        </div>
    </> );
}
 
export default CoursMembrePage;