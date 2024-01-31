import React from 'react';
import '../../Styles/Membre/CoursMembre.css'
import CalendrierCours from './CalendrierComponent';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const InscriptionCoursMembreComponent = () => {
    return (
        <>
            <div className="cours_membre">
                <div class="nom_prenom">
                    <h1>Votre galop actuel : 5</h1>
                    <p>Bienvenue sur la page d’inscription aux cours. Vous pouvez vous inscrire aux cours correspondant
                        à votre niveau, ou à un niveau plus bas.</p>
                </div>

                <div>
                    <CalendrierCours/>
                </div>

            </div>
        </>
    );
}

export default InscriptionCoursMembreComponent;