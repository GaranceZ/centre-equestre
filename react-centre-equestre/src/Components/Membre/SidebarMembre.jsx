import React, { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import '../../Styles/Membre/SidebarMembre.css'
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SidebarMembre = () => {

    const { userEmail, setUserEmail, user, setUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const disconnectUser = () => {
        // Clear stored user data on logout
        localStorage.removeItem('user');

        localStorage.clear();
        setUserEmail("");
        setUser(null);
        navigate('/');
        // window.location.reload();
        toast.success("Deconnexion reussie");
    };

    return (
        <>
            <div class="sidebar">
                <div className='icon_sidebar'>
                   <img src={process.env.PUBLIC_URL + '/assets/logo_navbar/flying-horses-pegasus-stallion-wing-belle.png'}/>
                </div>
                <div className='lien_sidebar'>
                    <Link to={"/profil"}>Mon profil</Link>
                    <Link to={"/mescours"}>Mes cours</Link>
                    <Link to={"/inscription-cours"}>S'inscrire à un cours</Link>
                    <Link to={"/parametres"}>Connexion & Sécurité</Link>
                </div>
                <div className='logout'>
                    <Link to={"/"} onClick={disconnectUser}><i className='bx bx-log-out bx-md'></i>Déconnexion</Link>
                </div>
            </div>

        </>
    );
}

export default SidebarMembre;
