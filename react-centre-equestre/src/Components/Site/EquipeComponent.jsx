import React, { useEffect, useState } from 'react';
import EquipeService from '../../Services/EquipeService';
import '../../Styles/Site/EquipePage.css'

const EquipeComponent = () => {
    const [imageEquipe, setImageEquipe] = useState([]);

    const fetchImageEquipe = async () => {
        try {
            const response = await EquipeService.getEquipe();
            setImageEquipe(response.data.data);
            console.log(response.data.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchImageEquipe();
    }, []);


    return (
        <>
            <div className='Titre_Equipe'>
                <h1>L'équipe de notre centre équestre</h1>
                <div className='Equipe_container'>
                    {imageEquipe.map((equipe, index) => (
                        <div key={index} className='EquipeCard'>
                            <img src={process.env.PUBLIC_URL + `/assets/Images_Equipe/${equipe.EQ_Photo}`} width={'300px'} height={'200px'} />
                            <div className='nom_poste'>
                                <div className='equipe_nom'>{equipe.EQ_Prenom} {equipe.EQ_Nom}</div>
                                <div className='poste1'> {equipe.EQ_Poste_Principal}</div>
                                <div className='poste2'> {equipe.EQ_Poste_Secondaire}</div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        </>
    );
}

export default EquipeComponent;