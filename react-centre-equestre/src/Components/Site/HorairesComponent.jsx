import React from 'react';
import '../../Styles/Site/Horaires.css'

const HorairesComponent = () => {
    return (
        <>
            <div className='image_haut_horaires'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Horaires/horaires_haut.jpg'} alt="image d'un manège" />
            </div>

            <div className="Titre_horaires_accueil">
                <h1>Horaires de l'accueil</h1>
                <div className='horaires_accueil'>
                    <p><span>Lundi, Mardi, Jeudi, Vendredi</span> : 14h00 - 18h30</p>
                    <p><span>Mercredi, Samedi, Dimanche</span> : 10h00 – 12h00 / 14h00 - 18h30</p>
                </div>
            </div>

            {/* TITRAGE HORAIRES PONEYCLUB*/}
            <div className='Horaires_poney_club'>
                <h1>Poney club</h1>
                <div className='texte_horaire_poney_club'>
                    <p>
                        Le poney club : à partir de 2 ans. Apprendre en s’amusant… des cours adaptés aux enfants, des plannings organisés pour les parents !
                    </p>
                </div>
                <p className='cours_poney'>
                    <span className='cours_poney_titre'>Les cours poney : 5 niveaux</span>
                    <ul>
                        <li>Baby cool : de 2 à 4 ans – cours de 30 min avec parent accompagnateur</li>
                        <li>Baby tonic : de 4 à 5 ans – cours de 30 min avec parent accompagnateur</li>
                        <li>Poney cool : débutant – cours de 1h</li>
                        <li>Poney 1/2 confirmé : cours de 1h</li>
                        <li>Poney tonic : confirmé – cours de 1h</li>
                    </ul>
                </p>
            </div>

            {/* TITRAGE HORAIRES CHEVAL CLUB*/}
            <div className='Horaires_poney_club'>
                <h1>Cheval club</h1>
                <div className='texte_horaire_poney_club'>
                    <p>
                        Loisirs ou sportive, quelque soit votre pratique équestre, nous avons forcément la formule qu’il vous faut !
                    </p>
                </div>
                <p className='cours_poney'>
                    <span className='cours_poney_titre'>Les cours chevaux : du débutant à la compétition</span>
                    <ul>
                        <li>Durée des cours : 1 heure</li>
                        <li>En équitation, le niveau d’un cavalier se compose de galop. Les débutants sont de niveau galop 0. Le galop 7 étant le galop permettant les sorties en compétition. Pour passer au niveau supérieur, vous devez valider votre galop soit par le passage d’un examen soit par accord du moniteur.</li>
                        <li>Les heures libres : vous choisissez votre cheval, vous montez seul. </li>
                    </ul>
                </p>
            </div>

            {/* TITRAGE AVANTAGES */}
            <div className="avantages">
                <h1>Nos avantages</h1>
                <div className="texte_avantages">
                    <p><span>Vous n'êtes pas obligé de monter tout le temps au même horaire.</span> Les inscriptions aux cours, une fois membre, se font sur internet. Vous êtes donc libre de choisir les cours qui vous conviennent en fonction de votre planning. </p>
                    <p><span>Le centre équestre est ouvert tous les jours de l’année y compris pendant les vacances scolaires.</span> Les horaires peuvent changer lors de stages pendant les vacances. Les jours fériés, les horaires du dimanche sont appliqués.</p>
                    <p><span>Votre abonnement est valable une année complète (date à date).</span> Vous pouvez moduler les inscriptions aux cours comme bon vous semble. </p>
                </div>
            </div>

            {/* TITRAGE HORAIRES COURS */}
            <div className="Horaires_cours">
                <h1>Les horaires des cours</h1>
                <div className='cours_telecharger'>
                    <p>Télécharger la fiche des horaires</p>
                </div>
                <p className='horaires_cours_italic'>Le Centre Équestre ferme 15 minutes après le dernier cours.</p>
            </div>
        </>
    );
}

export default HorairesComponent;