import React from 'react';
import SidebarMembre from '../../Components/Membre/SidebarMembre';
import ParametreMembreComponent from '../../Components/Membre/ParametreMembre';
import '../../Styles/Layout.css'

const ParametreMembrePage = () => {
    return ( 
        <>
        <div className='layout'>
        <SidebarMembre/>
        <ParametreMembreComponent/>
        </div>
        </>
     );
}
 
export default ParametreMembrePage;
