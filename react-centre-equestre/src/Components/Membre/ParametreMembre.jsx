import React, { useState, useEffect, useContext} from 'react';
import GlobalContext from '../../Context/GlobalContext';

const ParametreMembre = () => {
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
                    <p>Bienvenue sur la page contenant vos informations. Ici vous pouvez les changer, afin que l’on puisse
toujours vous contacter en cas de changement.</p>
                </div>

                <div className="infos_membre_container">
                    <div className="infos_membre">
                        <h3>Nom</h3>
                        <p>{user.USER_Nom}</p>
                    </div>
                    <div className="infos_membre">
                        <h3>Prénom</h3>
                        <p>{user.USER_Prenom}</p>
                    </div>
                    <div className="infos_membre">
                        <h3>Téléphone</h3>
                        <p>{user.USER_Telephone}</p>
                    </div>
                    <div className="infos_membre">
                        <h3>E-mail</h3>
                        <p>{user.USER_Mail}</p>
                    </div>
                    <div className="infos_membre">
                        <h3>Mot de passe</h3>
                        <p>************</p>
                        <button type="button">Modifier mes informations</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ParametreMembre;