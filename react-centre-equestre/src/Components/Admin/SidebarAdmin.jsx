import React, { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../Styles/Membre/SidebarMembre.css'
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SidebarAdmin = () => {
    const { userEmail, setUserEmail, user, setUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isBurgerOpen, setBurgerOpen] = useState(false); // State to manage burger menu visibility

    const disconnectUser = () => {
        // Clear stored user data on logout
        localStorage.removeItem('user');
        localStorage.clear();
        setUserEmail("");
        setUser(null);
        navigate('/');
        // window.location.reload();
        toast.success("Déconnexion réussie");
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

        // Toggle function for burger menu
        const toggleBurger = () => {
            setBurgerOpen(prevState => !prevState); // Toggle the previous state
            const menuToggle = document.querySelector('.side-toggle');
            menuToggle.classList.toggle('active');
        };

    return (
        <>
            <div className={`sidebar ${isBurgerOpen ? 'active' : ''}`}>
            <div className='side-toggle' onClick={toggleBurger}>
                <span>&#9776;</span>
            </div>
                <div className='icon_sidebar_admin'>
                   <img src={process.env.PUBLIC_URL + '/assets/logo_navbar/flying-horses-pegasus-stallion-wing-belle.png'} alt="Logo" />
                   <p>ADMIN</p>
                </div>
                <div className='lien_sidebar'>
                    <NavLink to={"/admin/membres"} isActive={() => isActive("/admin/membres")} activeClassName="active">Liste des membres</NavLink>
                    <NavLink to={"/admin/equipe"} isActive={() => isActive("/admin/equipe")} activeClassName="active">Liste de l'équipe pédag.</NavLink>
                    <NavLink to={"/admin/chevaux"} isActive={() => isActive("/admin/chevaux")} activeClassName="active">Liste des chevaux</NavLink>
                    <NavLink to={"/inscription-cours"} isActive={() => isActive("/inscription-cours")} activeClassName="active">Liste des cours</NavLink>
                </div>
                <div className='logout'>
                    <Link to={"/"} onClick={disconnectUser}><i className='bx bx-log-out bx-md'></i>Déconnexion</Link>
                </div>
            </div>
        </>
    );
}

export default SidebarAdmin;