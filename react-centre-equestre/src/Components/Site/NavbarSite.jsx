import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Styles/Site/NavbarSite.css';

const NavbarSite = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isBurgerOpen, setBurgerOpen] = useState(false); // State to manage burger menu visibility
    const location = useLocation();

    // Toggle function for burger menu
    const toggleBurger = () => {
        setBurgerOpen(!isBurgerOpen);
    };

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <header>
            <Link to="/">
                    <img
                        src={process.env.PUBLIC_URL + '/assets/logo_navbar/flying-horses-pegasus-stallion-wing-belle.png'}
                        alt='Logo'
                        className='logo_navbar'
                    />
                </Link>
                {/* Burger menu icon */}
            <div className="menu-toggle" onClick={toggleBurger}>
                <span>&#9776;</span>
            </div>
                {/* Navbar */}
                <nav className={`navbar_site ${isBurgerOpen ? 'active' : ''}`}>
                    <div className="text-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a>Le Centre&#9660;</a>
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                                <ul className='texte_dropdown'>
                                    <li className='dropdown_texte'><Link to="/installations">Installations</Link></li>
                                    <li className='dropdown_texte'><Link to="/equipe">L'équipe</Link></li>
                                    <li className='dropdown_texte'><Link to="/cavalerie">La cavalerie</Link></li>
                                    <li className='dropdown_texte'><Link to={"/pensions"}>Pensions</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="text-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a>Activités &#9660;</a>
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                                <ul className='texte_dropdown'>
                                    <li className='dropdown_texte'><Link to="/bapteme">Baptême poney</Link></li>
                                    <li className='dropdown_texte'><Link to="/anniversaire">Anniversaire</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className={`text-container ${location.pathname === '/horaires' ? 'active' : ''}`}>
                        <Link to={"/horaires"} >Horaires</Link>
                    </div>
                    <div className={`text-container ${location.pathname === '/tarifs' ? 'active' : ''}`}>
                        <Link to={"/tarifs"}>Tarifs</Link>
                    </div>
                    <div className={`text-container ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className={`text-container ${location.pathname === '/login' ? 'active' : ''}`}>
                        <Link to={"/login"}>Membre</Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavbarSite;
