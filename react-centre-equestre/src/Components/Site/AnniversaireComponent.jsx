import React from 'react';
import '../../Styles/Site/Anniversaire.css'

const AnniversaireComponent = () => {
    return (
        <>
            <div className='image_haut_anniversaire'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Anniversaire/anniversaire_haut.jpg'} alt="image d'un manège" />
            </div>


            {/* TITRAGE ANNIV*/}
            <div className='Titre_anniversaire'>
                <h1>Mon anniversaire à cheval</h1>
                <p>
                    <span className='bold_text_anniversaire'>Des poneys, des copains et des copines, une jolie salle décorée … quoi de mieux !
                    </span></p>
                <p className='liste_anniversaire'> L'anniversaire à poney consiste en une séance de jeux à poney avec un moniteur : 6 poneys max pour 1 heure, avec en plus :
                    <ul >
                        <li>Remise de diplômes pour chaque enfant</li>
                        <li>Une salle décorée rien que pour toi et et tes ami(e)s (salle climatisée et chauffée)</li>
                        <li>Un cadeau pour l'enfant qui fête son anniversaire</li>
                        <li>Les cartons d’invitations à envoyer aux copains</li>
                        <li>Un diplôme de poney pour chaque enfant</li>
                    </ul>
                </p>
                <div className="anniversaire_quand">
                    <p>
                        <span className='bold_quand'>QUAND ? </span>
                        Le samedi, le mercredi ou le dimanche 14h à 16h30 (séance de poney de 14h à 15h)
                    </p>
                </div>
            </div>

            {/* TITRAGE DEROULE ANNIV*/}
            <div className='Titre_deroule'>
                <h1>Déroulé de l'anniversaire</h1>
                <div className='texte_deroule'>
                <p>
                    Les enfants sont pris en charge à poney, de 14h à 15h, jeux à poney et à pied, découvertes, caresses etc. Il est bien que
                    quelques parents restent avec l’animateur surtout pour les jeunes enfants. Il est important d’arriver à l’heure, les cours
                    commençant à 15h, il n’est pas possible de rattraper le temps perdu en cas de retard des enfants.</p>
                <p> Les enfants ensuite se dirigent dans la salle anniversaire dédiée où une table les attends. Vous pourrez alors servir le gâteau,
                    bonbons et boissons (amenés par les parents). Les enfants doivent être sous la responsabilité d’un adulte. Prévoir 1 adulte pour 
                    2 enfants en dessous de 5 ans et 1 adulte pour 5 enfants à partir de 6 ans. Vous pouvez aussi amener des jeux de société ou 
                    prévoir des activités calmes (pas de pinata, confettis, trompette, tambour...).
                </p>
                </div>
                <p className='tenue_conseillee'>
                    <span className='tenue_conseille_bold'>Tenue conseillée pour la séance à poney</span>
                    <ul>
                        <li>Des petites bottes de caoutchouc, sinon des baskets</li>
                        <li>Un pantalon, on évite les robes et les shorts.</li>
                        <li>Les casques de protection sont prêtés.</li>
                        <li>Les enfants peuvent être déguisés.</li>
                    </ul>
                </p>
            </div>

            <div className="Tarif_Anniversaire">
            <h1>Tarif</h1>
            <div className='Infos_tarifs'>
            <p>159€ jusque 12 enfants</p>
            <p>Réservation: 03.20.25.22.71 ou contact.harras@gmail.com</p>
            <p className='anniv_formulaire'>Ou par le formulaire de contact</p>
            <p className='anniv_italic'>Toute réservation est définitive. Aucun report. Paiement complet à la réservation.</p>
            <p className='anniv_download'>Télécharger les cartons d'invitation</p>
            </div>
            </div>
        </>
    );
}

export default AnniversaireComponent;