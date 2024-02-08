import React, { useEffect, useState } from 'react';
import '../../Styles/Admin/ListeEquipePedag.css'
import EquipeService from '../../Services/EquipeService';
import { toast } from 'react-toastify';


const ListeEquipePedagComponent = () => {
    const [imageEquipeAdmin, setImageEquipeAdmin] = useState([]);
    const [addEquipe, setAddEquipe] = useState({
        nom_pedag: '',
        prenom_pedag: '',
        photo: '',
        poste1: '',
        poste2: '',
    });
    const [showModifyInput, setShowModifyInput] = useState(false);
    const [updatedData, setUpdatedData] = useState({
        nom_pedag: '',
        prenom_pedag: '',
        photo: '',
        poste1: '',
        poste2: '',
    });
    const [selectedEquipeId, setSelectedEquipeId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setAddEquipe({ ...addEquipe, [name]: value });
    };

    const handleFileChange = (e) => {
        const fileName = e.target.files[0].name;
        setAddEquipe({ ...addEquipe, photo: fileName });
        console.log('File Name:', fileName);
        // Do whatever you need with the file name
    };

    const handleAddEquipe = async (e) => {
        e.preventDefault();
        console.log(addEquipe);

        try {
            const response = await EquipeService.addEquipe(addEquipe);
            console.log(response);
            toast.success("Le membre a bien été ajouté à votre équipe");
            fetchImageEquipeAdmin();
        } catch (e) {
            console.log(e);
            toast.error("Le membre n'a pas pu être ajouté à votre équipe");
        }
    };

    const handleDeleteEquipe = async (id) => {
        try {
            const response = await EquipeService.removeEquipe(id);
            console.log(response);
            toast.success("L'employé' a bien été supprimé votre cavalerie");
            fetchImageEquipeAdmin();
        } catch (error) {
            console.error(error);
            toast.error("L'employé n'a pas pu être supprimé de votre cavalerie");
        }
    };

    const handleChangeModify = (e) => {
        const { name, value } = e.currentTarget;
        setUpdatedData({ ...updatedData, [name]: value });
    };

    const handleFileChangeModify = (e) => {
        const fileName = e.target.files[0].name;
        setUpdatedData({ ...updatedData, photo: fileName });
        console.log('File Name:', fileName);
    };

    const handleModifyEquipe = async (id) => {
        try {
            const response = await EquipeService.updateEquipe(id,
                updatedData.nom_pedag,
                updatedData.prenom_pedag,
                updatedData.photo,
                updatedData.poste1,
                updatedData.poste2);
            console.log(response);
            toast.success("Le membre a bien été modifié dans votre équipe");
            fetchImageEquipeAdmin();
            setShowModifyInput(false);
        } catch (error) {
            console.error(error);
            toast.error("Le membre n'a pas pu être modifié dans votre équipe");
        }
    };

    const fetchImageEquipeAdmin = async () => {
        try {
            const response = await EquipeService.getEquipe();
            setImageEquipeAdmin(response.data.data);
            console.log(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchImageEquipeAdmin();;
    }, []);


    return (
        <>
            <div className="main_container">

                <div className='container_all_liste'>
                    <h1>Membres de l'équipe pédagogique</h1>
                    <div className='liste_equipe'>
                        <div className="membre_pedag">
                            {imageEquipeAdmin.map((equipeAdmin, index) => (
                                <div key={index} className="pedag-details">
                                    <div className="profile-picture">
                                        <img className="colored-circle" src={process.env.PUBLIC_URL + `/assets/Images_Equipe/${equipeAdmin.EQ_Photo}`} loading='lazy' />
                                    </div>
                                    <p>{equipeAdmin.EQ_Nom}</p>
                                    <p>{equipeAdmin.EQ_Prenom}</p>
                                    <p>{equipeAdmin.EQ_Poste_Principal}</p>
                                    <p>{equipeAdmin.EQ_Poste_Secondaire}</p>
                                    <div className='icon_delete'>
                                        <i class='bx bxs-trash' style={{ fontSize: 30 + 'px' }} onClick={() => handleDeleteEquipe(equipeAdmin.EQ_ID)}></i>
                                    </div>
                                    <div className='icon_delete'>
                                        <i
                                            className='bx bxs-edit'
                                            style={{ fontSize: 30 + 'px' }}
                                            onClick={() => {
                                                setShowModifyInput(true);
                                                setSelectedEquipeId(equipeAdmin.EQ_ID);
                                                setUpdatedData({
                                                    nom_pedag: equipeAdmin.EQ_Nom,
                                                    prenom_pedag: equipeAdmin.EQ_Prenom,
                                                    photo: equipeAdmin.EQ_Photo,
                                                    poste1: equipeAdmin.EQ_Poste_Principal,
                                                    poste2: equipeAdmin.EQ_Poste_Secondaire,
                                                });
                                            }}
                                        ></i>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {showModifyInput && (
                        <div className="modify_pedag_container">
                            <h1>Modifier un membre de l'équipe</h1>
                            <div className="container_form_pedag">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    accept="image/*"
                                    onChange={handleFileChangeModify}
                                />
                                <input
                                    type="text"
                                    id="nom_pedag"
                                    name="nom_pedag"
                                    placeholder="Nom"
                                    required
                                    value={updatedData.nom_pedag}
                                    onChange={handleChangeModify}
                                />
                                <input
                                    type="text"
                                    id="prenom_pedag"
                                    name="prenom_pedag"
                                    placeholder="Prénom"
                                    required
                                    value={updatedData.prenom_pedag}
                                    onChange={handleChangeModify}
                                />

                                <input
                                    type="text"
                                    id="poste1"
                                    name="poste1"
                                    placeholder="Poste 1"
                                    required
                                    value={updatedData.poste1}
                                    onChange={handleChangeModify}
                                />
                                <input
                                    type="text"
                                    id="poste2"
                                    name="poste2"
                                    placeholder="Poste 2"
                                    value={updatedData.poste2}
                                    onChange={handleChangeModify}
                                />
                                {/* ... (add similar input fields for other properties) */}
                                
                            </div>
                            <button type="button" onClick={() => handleModifyEquipe(selectedEquipeId)}>
                                    Modifier
                                </button>
                        </div>
                    )}

                    <div className="add_pedag_container">
                        <h1>Ajouter un membre à l'équipe</h1>
                        <div className="container_form_pedag">
                            <form>
                                <div className="form_add_pedag">
                                    <input type='file' className='photo_cheval' name='photo' onChange={handleFileChange}></input>
                                    <input type="text" id="nom_pedag" name="nom_pedag" placeholder="Nom" required onChange={handleChange} />
                                    <input type="text" id="prenom_pedag" name="prenom_pedag" placeholder="Prénom" required onChange={handleChange} />
                                    <input type="text" id="poste1" name="poste1" placeholder="Poste 1" required onChange={handleChange} />
                                    <input type="text" id="poste2" name="poste2" placeholder="Poste 2" onChange={handleChange} />


                                </div>
                               
                            </form>
                        </div>
                        <button type="submit" onClick={handleAddEquipe}>Ajouter</button>

                    </div>
                    <div className="blankspace">
                        <p></p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default ListeEquipePedagComponent;