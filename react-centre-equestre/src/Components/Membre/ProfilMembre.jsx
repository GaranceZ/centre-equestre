import React, { useState, useEffect, useContext} from 'react';
import GlobalContext from '../../Context/GlobalContext';
import '../../Styles/Membre/ProfilMembre.css'

const ProfilMembreComponent = () => {
    const { userEmail, user, setUser } = useContext(GlobalContext);

    useEffect(() => {
        // Retrieve user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
          setUser(storedUser);
        }
      }, [setUser]);

    useEffect(() => {
        // Store user data in local storage whenever the user object changes
        localStorage.setItem('user', JSON.stringify(user));
      }, [user]);


    return (
        <>
        <div className="profil_membre">
        <div class="nom_prenom">
            <h1>Bonjour, {user ? user.USER_Nom : ''} {user ? user.USER_Prenom : ''}</h1>
            <p>Bienvenue sur votre page de profil ! C’est ici que vous pourrez vous inscrire aux cours
                de votre choix (si votre niveau de Galop le permet) ou modifier vos informations.</p>
        </div>

        <div className="infos_membre_container">
            <div className="infos_membre">
                <h3>E-mail</h3>
                <p>{user ? user.USER_Mail : ''}</p>
            </div>
            <div className="infos_membre">
                <h3>Téléphone</h3>
                <p>{user ? user.USER_Telephone : ''}</p>
            </div>
            <div className="infos_membre">
                <h3>Galop Actuel</h3>
                <p>Galop {user ? user.USER_Galop : ''}</p>
            </div>
            <div className="infos_membre">
                <h3>Nombre de cours restant(s)</h3>
                <p>{user ? user.USER_CoursRestants : ''}</p>
            </div>
            <div className="infos_membre">
                <h3>Prochain cours</h3>
                <p>19/01/2024 15:30</p>
                <button type="button">Voir tous mes cours</button>
            </div>
        </div>
        <div className="blankspace">
            <p></p>
        </div>
        </div>

       
        </>
    );
}

export default ProfilMembreComponent;