import React from 'react';
import SidebarMembre from '../../Components/Membre/SidebarMembre';
import ProfilMembreComponent from '../../Components/Membre/ProfilMembre';
import '../../Styles/Layout.css'

const ProfilMembrePage = () => {
    return ( 
        <>
        <div className='layout'>
        <SidebarMembre/>
        <ProfilMembreComponent/>
        </div>
        </>
     );
}
 
export default ProfilMembrePage;