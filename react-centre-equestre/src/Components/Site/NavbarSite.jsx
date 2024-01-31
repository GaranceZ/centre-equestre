import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Site/NavbarSite.css';

const NavbarSite = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

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
                {/* Added div with text-container class and id */}
                <nav className='navbar_site'>
                    <div className="text-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a>Le Centre&#9660;</a>
                        {/* Dropdown content */}
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
                        {/* Dropdown content */}
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                                <ul className='texte_dropdown'>
                                    <li className='dropdown_texte'><Link to="/bapteme">Baptême poney</Link></li>
                                    <li className='dropdown_texte'><Link to="/anniversaire">Anniversaire</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='text-container'>
                        <Link to={"/horaires"}>Horaires</Link>
                    </div>
                    <div className='text-container'>
                        <Link to={"/tarifs"}>Tarifs</Link>
                    </div>
                    {/* <div className='text-container'>
                    <Link to={"/pensions"}>Pensions</Link>
                    </div> */}
                    <div className='text-container'>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    <div className='text-container'>
                        <Link to={"/login"}>Membre</Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavbarSite;