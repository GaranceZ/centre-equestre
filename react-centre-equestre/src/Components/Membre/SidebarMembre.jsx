import React, { useState, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../../Styles/Membre/SidebarMembre.css'
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SidebarMembre = () => {
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
        <div className={`sidebar ${isBurgerOpen ? 'active' : ''}`}>
            <div className='side-toggle' onClick={toggleBurger}>
                <span>&#9776;</span>
            </div>
            <div className='icon_sidebar'>
                       <img src={process.env.PUBLIC_URL + '/assets/logo_navbar/flying-horses-pegasus-stallion-wing-belle.png'}/>
                    </div>
            <div className='lien_sidebar'>
                <NavLink to={"/profil"} isActive={() => isActive("/profil")} activeClassName="active">Mon profil</NavLink>
                <NavLink to={"/mescours"} isActive={() => isActive("mescours")} activeClassName="active">Mes cours</NavLink>
                <NavLink to={"/inscription-cours"} isActive={() => isActive("/inscription-cours")} activeClassName="active">S'inscrire à un cours</NavLink>
                <NavLink to={"/parametres"} isActive={() => isActive("/parametres")} activeClassName="active">Connexion & Sécurité</NavLink>
            </div>
            <div className='logout'>
                <Link to={"/"} onClick={disconnectUser}><i className='bx bx-log-out bx-md'></i>Déconnexion</Link>
            </div>
        </div>
    );
}

export default SidebarMembre;