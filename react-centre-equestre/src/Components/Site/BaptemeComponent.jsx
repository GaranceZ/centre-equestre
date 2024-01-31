import React from 'react';
import '../../Styles/Site/Bapteme.css'

const BaptemeComponent = () => {
    return (
        <>
            <div className='image_haut_bapteme'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Bapteme/bapteme_haut.jpg'} alt="image d'un manège" />
            </div>

            {/* TITRAGE BAPTEME */}
            <div className='Titre_bapteme'>
                <h1>Baptême poney et cheval</h1>
                <p>
                    <span className='bold_text_bapteme'>Vous souhaitez passer un bon moment avec vos enfants ou vos petits enfants ?</span></p>
                <p> A partir de 2 ans, vous pouvez leur faire découvrir le poney. Pour les plus grands (à partir de 10-12 ans), faîtes-leur découvrir le cheval.
                    Nos 5 hectares de verdure vous attendent. </p>
            </div>


            {/* TEXTE BAPTEME */}
            <div className='texte_bapteme'>
                <p>
                    <span className='bold_text_bapteme'>Pour les baptêmes poneys : </span>
                    Les départs sont fixés toutes les 20 minutes à partir de 15h et jusque 17h (dernier
                    départ à 16h40) en saison et 16h-17h en saison hivernale, le mercredi et le samedi. Nous vous confions un
                    poney dans l’enceinte du centre équestre pour 15/20mn. Vous suivez la personne qui encadre les tours de
                    poneys. Avec ou sans rendez-vous. Une crêpe offerte au Tea Room dans le tarif et un diplôme pour l'enfant.
                    Il est prudent de réserver son créneau à l'avance pour vous assurer votre place.
                </p>
                <p>
                    <ul className='liste_bapteme'>
                        <li>Le poney est sous votre entière responsabilité.</li>
                        <li>Il doit être tenu par un adulte, rester au pas avec 1 enfant à la fois, muni de son casque.</li>
                        <li>Le poney est un animal , il peut avoir des réactions parfois imprévisibles  même le plus paisible.</li>
                        <li>Le poney doit rester sellé et bridé. La responsabilité du centre ne peut être engagée en cas d'accident ou en cas de non-respect des règles.</li>
                    </ul>
                </p>

                <p className='texte_bapteme_chevaux'>
                    <span className='bold_text_bapteme'>Pour les baptêmes chevaux : </span>
                    Nous vous encadrons avec un moniteur diplômé, pour une première approche de 15 minutes, en longe. Uniquement sur rendez-vous.
                </p>
            </div>

            <div className='prix_image_bapteme'>
                <div className="poney_tarif">
                    <div className="titre_poney_tarif">
                        <p>Baptême poney</p>
                        <p className='small_prix'>(20 min)</p>
                    </div>
                    <div className="image_poney_tarif">
                        <img src={process.env.PUBLIC_URL + '/assets/Images_Bapteme/bapteme_poney.jpg'} alt="image d'un manège" />
                    </div>
                    <div className="prix_poney">
                        15.00€
                    </div>
                </div>

                <div className="cheval_tarif">
                <div className="titre_poney_tarif">
                        <p>Baptême cheval</p>
                        <p className='small_prix'>(15 min)</p>
                    </div>
                    <div className="image_poney_tarif">
                        <img src={process.env.PUBLIC_URL + '/assets/Images_Bapteme/bapteme_chevaux.jpg'} alt="image d'un manège" />
                    </div>
                    <div className="prix_poney">
                        15.00€
                    </div>
                </div>

            </div>

        </>

    );
}

export default BaptemeComponent;
