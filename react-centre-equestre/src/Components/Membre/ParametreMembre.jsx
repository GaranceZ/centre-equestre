import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import MembresService from '../../Services/MembresService';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import '../../Styles/Membre/ParametresMembre.css'
import { useNavigate } from 'react-router-dom';

const ParametreMembre = () => {
  const { userEmail, user, setUser } = useContext(GlobalContext);
  const [showModifyInput, setShowModifyInput] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id: null,
    nomUser: '',
    prenomUser: '',
    mailUser: '',
    phoneUser: '',
    mdpUser: ''
  });
  const [selectedUserId, setSelectedUserId] = useState(user ? user.USER_ID : '');
  const navigate = useNavigate();


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

  const handleModifyInputChange = (e) => {
    const { name, value } = e.currentTarget;

    // Check if the input is the password field and a new password is provided
    if (name === 'mdpUser' && value.trim() !== '') {
      // Hash the new password using SHA-256 (or your preferred hashing algorithm)
      const hashedPassword = CryptoJS.SHA256(value).toString();
      setUpdatedData({ ...updatedData, [name]: hashedPassword });
    } else {
      // If no new password is provided, keep the existing hashed password
      setUpdatedData({ ...updatedData, [name]: value });
    }
  };

  const handleupdatedData = async (id) => {
    try {
      const response = await MembresService.updateSelfMember(
        id,
        updatedData.nomUser,
        updatedData.prenomUser,
        updatedData.mailUser,
        updatedData.phoneUser,
        updatedData.mdpUser
      );

      // Update the user state with the modified data
      setUser({
        ...user,
        USER_Nom: updatedData.nomUser,
        USER_Prenom: updatedData.prenomUser,
        USER_Mail: updatedData.mailUser,
        USER_Telephone: updatedData.phoneUser,
        USER_Password: updatedData.mdpUser
      });

      // Continue with other logic
      toast.success("Vous avez bien modifié vos informations");
      setShowModifyInput(false);
    } catch (error) {
      console.error(error);
      toast.error("L'utilisateur n'a pas pu être modifié dans votre liste");
    }
  };

  const handleDeleteMembre = async () => {
    try {
      const response = await MembresService.removeUser(selectedUserId);
      console.log(response);
      toast.warning("Vous avez bien supprimé votre compte");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("L'utilisateur n'a pas pu être supprimé de votre cavalerie");
    }
  };



  return (
    <>
      <div className="profil_membre">
        <div className="nom_prenom">
          <h1>Bonjour, {user ? user.USER_Nom : ''} {user ? user.USER_Prenom : ''}</h1>
          <p>
            Bienvenue sur la page contenant vos informations. Ici vous pouvez les changer, afin que
            l’on puisse toujours vous contacter en cas de changement.
          </p>
        </div>

        <div className="infos_membre_container">
          <div className="infos_membre">
            <h3>Nom</h3>
            <p>{user ? user.USER_Nom : ''}</p>
          </div>
          <div className="infos_membre">
            <h3>Prenom</h3>
            <p>{user ? user.USER_Prenom : ''}</p>
          </div>
          <div className="infos_membre">
            <h3>E-mail</h3>
            <p>{user ? user.USER_Mail : ''}</p>
          </div>
          <div className="infos_membre">
            <h3>Téléphone</h3>
            <p>{user ? user.USER_Telephone : ''}</p>
          </div>
          <div className="infos_membre">
            <h3>Mot de passe</h3>
            <p>********</p>
            <button type='button' onClick={() => {
          
              setShowModifyInput(true);
              setSelectedUserId(user ? user.USER_ID : '');
              setUpdatedData({
                id: user.USER_ID,
                nomUser: user.USER_Nom,
                prenomUser: user.USER_Prenom,
                mailUser: user.USER_Mail,
                phoneUser: user.USER_Telephone,
                mdpUser: user.USER_Password,

              });

       // Delay the scrollIntoView function
    setTimeout(() => {
      const targetElement = document.getElementById('targetElement');
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  }, 0); // Adjust delay as needed
            }}>Modifier mes informations</button>
            <div className='deleteBtn'>
            <button
              type='button'
              onClick={handleDeleteMembre}
            >
              Supprimer mon compte
            </button>
            </div>
          </div>

          <div className="blankspace">

          </div>




          


        </div>
        <div className="blankspace">
            <p></p>
        </div>

        

        {showModifyInput && (
            <div className="modify_membre_container" >
              <h1>Modifier mes informations</h1>
              <div className="container_form_membre">
                <input
                  type="text"
                  id="nomUser"
                  name="nomUser"
                  placeholder="Nom"
                  required
                  value={updatedData.nomUser}
                  onChange={handleModifyInputChange}
                />
                <input
                  type="text"
                  id="prenomUser"
                  name="prenomUser"
                  placeholder="Prénom"
                  required
                  value={updatedData.prenomUser}
                  onChange={handleModifyInputChange}
                />
                <input
                  type="email"
                  id="mailUser"
                  name="mailUser"
                  placeholder="Mail"
                  required
                  value={updatedData.mailUser}
                  onChange={handleModifyInputChange}
                />
                <input
                  type="tel"
                  id="phoneUser"
                  name="phoneUser"
                  pattern="[0-9]{10}"
                  placeholder="Téléphone"
                  required
                  value={updatedData.phoneUser}
                  onChange={handleModifyInputChange}
                  maxLength={10}
                />
                <input
                  type="password"
                  id="mdpUser"
                  name="mdpUser"
                  placeholder="Mot de passe"
                  required
                  onChange={handleModifyInputChange}
                />
                <button type="button" onClick={() => handleupdatedData(updatedData.id)}>
                  Modifier
                </button>
              </div>
            </div>
          )}
          <div id="targetElement"></div>
      </div>
      

    </>
  );
};

export default ParametreMembre;
