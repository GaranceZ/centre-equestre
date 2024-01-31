import React, { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import '../../Styles/Membre/SidebarMembre.css'
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SidebarAdmin = () => {
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
                <div className='icon_sidebar_admin'>
                   <img src={process.env.PUBLIC_URL + '/assets/logo_navbar/flying-horses-pegasus-stallion-wing-belle.png'}/>
                   <p>ADMIN</p>
                </div>
                <div className='lien_sidebar'>
                    <Link to={"/admin/membres"}>Liste des membres</Link>
                    <Link to={"/admin/equipe"}>Liste de l'équipe pédag.</Link>
                    <Link to={"/admin/chevaux"}>Liste des chevaux</Link>
                    <Link to={"/inscription-cours"}>Liste des cours</Link>
                </div>
                <div className='logout'>
                    <Link to={"/"} onClick={disconnectUser}><i className='bx bx-log-out bx-md'></i>Déconnexion</Link>
                </div>
            </div>

        </>
    );
}

export default SidebarAdmin;
