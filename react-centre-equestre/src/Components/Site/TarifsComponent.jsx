import React from 'react';
import '../../Styles/Site/Tarifs.css'

const TarifsComponent = () => {
    return (
        <>
            <div className='image_haut_tarifs'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Tarifs/tarif_haut.jpg'} alt="image d'un manège" />
            </div>

            <div className="Titre_tarifs">
                <h1>Tarifs poney-club</h1>
                <div className='forfait_initiations'>
                    <p>
                        <span className='bold_forfait'>Forfait initiation : </span>
                        4 Leçons pour 85 € déduit de l’adhésion. Prêt du casque gratuit, pas d’équipement spécial, valable 1 fois, à faire sur 1 mois.
                    </p>
                </div>

                <p><span className='bold_forfait'>Adhésion : </span>135 € ou 50  € (avec le forfait d’initiation déduit)
                    <br></br><span className='italic_forfait'>Gratuite à renouvellement du même forfait ou d’un forfait supérieur.</span></p>

                    <p><span className='bold_forfait'>Forfait 25 leçons : </span>475 € (paiement en 5 fois possible 50€ de frais en sus). valable 1 an date à date.</p>

                    <p><span className='bold_forfait'>Forfait 45 Leçons : </span>690 € (paiement en 10 fois possible 100€ de frais en sus). valable 1 an date à date.</p>

                    <p><span className='bold_forfait'>Forfait Illimité : </span>1 180 € (paiement en 10 fois possible 100€ de frais en sus). valable 1 an date à date. Challenge club et fête du cheval inclus.
                    <br></br><span className='italic_forfait'>Les forfaits illimités  peuvent être limités à 3h/semaine de manière provisoire selon l’affluence. A noter pour les heures libres, les forfaits 
                    illimités peuvent en faire 1 par semaine.</span></p>         
            </div>


            <div className="Titre_tarifs">
                <h1>Tarifs cheval-club</h1>
                <div className='forfait_initiations'>
                    <p>
                        <span className='bold_forfait'>Forfait initiation : </span>
                        4 Leçons pour 85 € déduit de l’adhésion. Prêt du casque gratuit, pas d’équipement spécial, valable 1 fois, à faire sur 1 mois.
                    </p>
                </div>

                <p><span className='bold_forfait'>Adhésion : </span>135 € ou 50  € (avec le forfait d’initiation déduit)
                    <br></br><span className='italic_forfait'>Gratuite à renouvellement du même forfait ou d’un forfait supérieur.</span></p>

                    <p><span className='bold_forfait'>Forfait 25 leçons : </span>565 € (paiement en 5 fois possible 50€ de frais en sus). valable 1 an date à date.</p>

                    <p><span className='bold_forfait'>Forfait 45 Leçons : </span>885 € (paiement en 10 fois possible 100€ de frais en sus). valable 1 an date à date.</p>

                    <p><span className='bold_forfait'>Forfait Illimité : </span>1 860 € (paiement en 10 fois possible 100€ de frais en sus). valable 1 an date à date. Challenge club et fête du cheval inclus.
                    <br></br><span className='italic_forfait'>Les forfaits illimités  peuvent être limités à 3h/semaine de manière provisoire selon l’affluence. A noter pour les heures libres, les forfaits 
                    illimités peuvent en faire 1 par semaine.</span></p>         
            </div>

            <div className="licence_federale">
            <div className="Titre_tarifs">
                <h1>Licence fédérale</h1>

                <p>La licence fédérale n’est pas comprise dans les tarifs. Assurance complémentaire, elle permet le passage des examens et elle est obligatoire
                    pour sortir en promenade ou en compétition. Son prix varie selon l’âge. Elle est valable l’année civile (jusqu’au 31/12) mais elle peut être
                    prise dès septembre pour l’année suivante (soit 15 mois). Aucune assurance n’est comprise dans nos tarifs.
                </p>         
            </div>
            </div>


        </>
    );
}

export default TarifsComponent;
 