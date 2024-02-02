import React, { useEffect, useState } from 'react';
import '../../Styles/Admin/ListeChevaux.css';
import CavalerieService from '../../Services/CavalerieService';
import { toast } from 'react-toastify';

const ListeChevauxComponent = () => {
    const [imageChevaux, setImageChevaux] = useState([]);
    const [addChevaux, setAddChevaux] = useState({
        nomCheval: '',
        typeCheval: '',
        photoCheval: '',
    });
    const [showModifyInput, setShowModifyInput] = useState(false); // State to control the visibility of the modification input
    const [modifiedName, setModifiedName] = useState('');
    const [selectedChevalId, setSelectedChevalId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setAddChevaux({ ...addChevaux, [name]: value });
    };

    const handleFileChange = (e) => {
        const fileName = e.target.files[0].name;
        setAddChevaux({ ...addChevaux, photoCheval: fileName });
        console.log('File Name:', fileName);
    };

    const handleAddChevaux = async (e) => {
        e.preventDefault();
        console.log(addChevaux);

        try {
            const response = await CavalerieService.addCheval(addChevaux);
            console.log(response);
            toast.success("Le cheval a bien été ajouté à votre cavalerie");
            fetchImageChevauxAdmin();
        } catch (e) {
            console.log(e);
            toast.error("Le cheval n'a pas pu être ajouté à votre cavalerie");
        }
    };

    const handleDeleteCheval = async (id) => {
        try {
            const response = await CavalerieService.removeCheval(id);
            console.log(response);
            toast.success("Le cheval a bien été supprimé votre cavalerie");
            fetchImageChevauxAdmin();
        } catch (error) {
            console.error(error);
            toast.error("Le cheval n'a pas pu être supprimé de votre cavalerie");
        }
    };

    const handleModifyName = async (id) => {
        if (!modifiedName.trim()) {
            toast.error("Le nom du cheval ne peut pas être vide");
            return;
        }
        
        try {
            console.log('Updating Cheval with:', id, modifiedName);
            const response = await CavalerieService.updateCheval(id, modifiedName);
            console.log('handleModifyName response:', response);
            toast.success("Le nom du cheval a bien été modifié");
            fetchImageChevauxAdmin();
            setShowModifyInput(false);
        } catch (error) {
            console.error(error);
            toast.error("Erreur lors de la modification du nom du cheval");
        }
    };


    const fetchImageChevauxAdmin = async () => {
        try {
            const response = await CavalerieService.getAllCheval();
            setImageChevaux(response.data.data);
            // console.log(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchImageChevauxAdmin();
    }, []);

    return (
        <>
            <div className="main_container">
                <div className='container_all_liste'>
                    <h1>Liste des équidés</h1>
                    <div className='liste_chevaux'>
                        <div className="cheval">
                            {imageChevaux.map((chevaux, index) => (
                                <div key={index} className="cheval-details">
                                    <div className="profile-picture">
                                        <img
                                            className="colored-circle"
                                            src={process.env.PUBLIC_URL + `/assets/cheval_image/all/${chevaux.CH_Photo}`}
                                            loading='lazy'
                                        />
                                    </div>
                                    <p>{chevaux.CH_Nom}</p>
                                    <p>{chevaux.CH_Type}</p>
                                    <div className='icon_delete'>
                                        <i
                                            className='bx bxs-trash'
                                            style={{ fontSize: 30 + 'px' }}
                                            onClick={() => handleDeleteCheval(chevaux.CH_ID)}
                                        ></i>
                                    </div>
                                    <div className='icon_delete'>
                                        <i
                                            className='bx bxs-edit'
                                            style={{ fontSize: 30 + 'px' }}
                                            onClick={() => {
                                                setShowModifyInput(true);
                                                setSelectedChevalId(chevaux.CH_ID);
                                            }}
                                        ></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {showModifyInput && (
                        <div className="modify_cheval_container">
                            <h1>Modifier le nom du cheval</h1>
                            <div className="container_modify_cheval">
                                <input
                                    type="text"
                                    id="modified_nom_cheval"
                                    name="modifiedNomCheval"
                                    placeholder="Nouveau nom du cheval"
                                    value={modifiedName}
                                    onChange={(e) => setModifiedName(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleModifyName(selectedChevalId)}
                                >
                                    Modifier le nom du cheval
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="add_cheval_container">
                        <h1>Ajouter un équidé</h1>
                        <div className="container_form_cheval">
                            <form encType="multipart/form-data">
                                <div className="form_add_cheval">
                                    <input
                                        type='file'
                                        className='photo_cheval'
                                        name='photoCheval'
                                        onChange={handleFileChange}
                                    ></input>
                                    <input
                                        type="text"
                                        id="nom_cheval"
                                        name="nomCheval"
                                        placeholder="Nom du cheval"
                                        required
                                        value={addChevaux.nomCheval}
                                        onChange={handleChange}
                                    />
                                    <select
                                        name='typeCheval'
                                        value={addChevaux.typeCheval}
                                        onChange={handleChange}
                                    >
                                        <option value="">--Type--</option>
                                        <option value="Cheval">Cheval</option>
                                        <option value="Poney">Poney</option>
                                    </select>
                                </div>
                                <button type="submit" onClick={handleAddChevaux}>
                                    Ajouter un équidé
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListeChevauxComponent;
