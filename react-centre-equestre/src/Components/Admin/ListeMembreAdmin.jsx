import React, { useEffect, useState } from 'react';
import '../../Styles/Admin/ListeMembres.css';
import MembresService from '../../Services/MembresService';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';

const ListeMembreAdmin = () => {
    const [membres, setMembres] = useState([]);
    const [addMembre, setAddMembre] = useState({
        nomUser: '',
        prenomUser: '',
        mailUser: '',
        phoneUser: '',
        mdpUser: '',
        galopUser: '',
        coursUser: ''
    });

    const [showModifyInput, setShowModifyInput] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        id: null,
        nomUser: '',
        prenomUser: '',
        mailUser: '',
        phoneUser: '',
        mdpUser: '',
        galopUser: '',
        coursUser: ''
    });
    const [selectedUserId, setSelectedUserId] = useState(null); 

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setAddMembre({ ...addMembre, [name]: value });
    };

   
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

    const handleAddMembre = async (e) => {
        e.preventDefault();
        console.log(addMembre);

        try {
            const response = await MembresService.addMembre(addMembre);
            console.log(response);
            toast.success("Le membre a bien été ajouté à votre base de données");
            fetchMembres();
        } catch (e) {
            console.log(e);
            toast.error("Le membre n'a pas pu être ajouté à votre base de données");
        }
    };

    const handleupdatedData = async (id) => {
        try {
          
            const response = await MembresService.updateMember(
                id,
                updatedData.nomUser,
                updatedData.prenomUser,
                updatedData.mailUser,
                updatedData.phoneUser,
                updatedData.mdpUser, // Use the new or former password based on the condition
                updatedData.galopUser,
                updatedData.coursUser
            );
    
            console.log(response);
            toast.success("L'utilisateur a bien été modifié dans votre liste");
            fetchMembres();
            setShowModifyInput(false);
        } catch (error) {
            console.error(error);
            toast.error("L'utilisateur n'a pas pu être modifié dans votre liste");
        }
    };

    const handleDeleteMembre = async (id) => {
        try {
            const response = await MembresService.removeUser(id);
            console.log(response);
            toast.success("L'utilisateur a bien été supprimé de votre cavalerie");
            fetchMembres();
        } catch (error) {
            console.error(error);
            toast.error("L'utilisateur n'a pas pu être supprimé de votre cavalerie");
        }
    };

    const fetchMembres = async () => {
        try {
            const response = await MembresService.fetchAllMembres();
            setMembres(response.data.data);
            console.log(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchMembres();
    }, []);

    return (
        <>
            <div className="main_container">
                <div className='container_all_liste'>
                    <h1>Liste des membres</h1>
                    <div className='liste_membre'>
                        {membres.map((users, index) => (
                            <div key={index} className="membre">
                                <p>{users.USER_Nom}</p>
                                <p>{users.USER_Prenom}</p>
                                <p>Cours : {users.USER_CoursRestants}</p>
                                <p>Galop {users.USER_Galop}</p>
                                <p>{users.USER_Mail}</p>
                                <p>{users.USER_Telephone}</p>
                                <div className='icon_delete'>
                                    <i class='bx bxs-trash' style={{ fontSize: 30 + 'px' }} onClick={() => handleDeleteMembre(users.USER_ID)}></i>
                                </div>
                                <div className='icon_delete'>
                                    <i
                                        className='bx bxs-edit'
                                        style={{ fontSize: 30 + 'px' }}
                                        onClick={() => {
                                            setShowModifyInput(true);
                                            setSelectedUserId(users.USER_ID);
                                            setUpdatedData({
                                                id: users.USER_ID,
                                                nomUser: users.USER_Nom,
                                                prenomUser: users.USER_Prenom,
                                                galopUser: users.USER_Galop,
                                                coursUser: users.USER_CoursRestants,
                                                mailUser: users.USER_Mail,
                                                phoneUser: users.USER_Telephone,
                                                mdpUser: users.USER_Password,
                                                
                                            });
                                        }}
                                    ></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    {showModifyInput && (
                        <div className="modify_membre_container">
                            <h1>Modifier un membre</h1>
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
                                    type="number"
                                    id="coursUser"
                                    name="coursUser"
                                    placeholder="Nombre de cours"
                                    required
                                    value={updatedData.coursUser}
                                    onChange={handleModifyInputChange}
                                />
                                <input
                                    type="number"
                                    id="galopUser"
                                    name="galopUser"
                                    placeholder="Galop"
                                    required
                                    value={updatedData.galopUser}
                                    onChange={handleModifyInputChange}
                                    max={7}
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
                                    type="text"
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

                    <div className="add_membre_container">
                        <h1>Ajouter un membre</h1>
                        <div className="container_form_membre">
                            <form>
                                <div className="form_add">
                                    <input type="text" id="nom" name="nomUser" placeholder="Nom" required onChange={handleChange} />
                                    <input type="text" id="prenom" name="prenomUser" placeholder="Prénom" required onChange={handleChange} />
                                    <input type="number" id="number" name="coursUser" placeholder="Nombre de cours" required onChange={handleChange} />
                                    <input type="number" id="level" name="galopUser" placeholder="Galop" required onChange={handleChange} max={7} />
                                    <input type="email" id="mail" name="mailUser" placeholder="Mail" required onChange={handleChange} />
                                    <input type="password" id="password" name="mdpUser" placeholder="Mdp" required onChange={handleChange} />
                                    <input type="tel" id="phone" name="phoneUser" pattern="[0-9]{10}" placeholder="Téléphone" required onChange={handleChange} maxLength={10} />
                                </div>
                                <button type="submit" onClick={handleAddMembre}>Ajouter un membre</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListeMembreAdmin;
