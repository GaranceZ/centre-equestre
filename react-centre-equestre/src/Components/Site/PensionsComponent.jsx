import React from 'react';
import '../../Styles/Site/Pensions.css'

const PensionsComponent = () => {
    return (
        <>
            <div className='image_haut_pensions'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Pensions/pensions_haut.jpeg'} alt="image d'un manège" />
            </div>

            {/* TITRAGE PENSIONS */}
            <div className='Titre_pensions'>
                <h1>Pensions - Propriétaires</h1>
                <p className='sous_texte_pension'>
                    <span>Offrez à votre équidé une vie épanouissante et à vous-même la tranquillité d'esprit en choisissant parmi nos pensions soigneusement conçues pour répondre à tous vos besoins. Chez nous, chaque cheval est choyé comme le vôtre.
                    </span>
                </p>

                <p>
                    Découvrez le confort et la tranquillité pour vous et votre équidé avec nos trois types de pensions pensées
                    pour répondre à toutes vos attentes. Toutes nos formules inclusives garantissent un environnement optimal pour le
                    bien-être de votre compagnon, comprenant :

                </p>

                <p>
                    <ul className='liste_pensions'>
                        <li><span className='bold_pensions'>Box Confortable :</span> Chaque jour, un box soigneusement paillé pour assurer le confort de votre cheval.</li>
                        <li><span className='bold_pensions'>Alimentation Équilibrée :</span> Trois repas par jour à base de l'aliment complet de qualité Royal Horse, comprenant avoine, orge et granulés, ainsi qu'une ration de foin de qualité.</li>
                        <li><span className='bold_pensions'>Éléments Essentiels :</span> Le bloc de sel est inclus dans les pensions Confort et Passion pour compléter les besoins nutritionnels. Chaque propriétaire bénéficie également d'un casier personnel.</li>
                        <li><span className='bold_pensions'>Accès aux Installations :</span> Profitez pleinement de nos installations, incluant espaces verts, carrières, manège, douche, rond de longe, cross et paddocks.</li>
                        <li><span className='bold_pensions'>Surveillance Attentionnée :</span> Nous assurons une surveillance générale du bien-être de votre cheval.</li>
                        <li><span className='bold_pensions'>Stationnement Pratique :</span> Les propriétaires des pensions Confort et Passion bénéficient également d'un accès au parking dédié pour leur van.</li>
                        <li><span className='bold_pensions'>Cours et Entraînements :</span> Les amateurs de perfectionnement équestre apprécieront nos cours collectifs ou entraînements personnalisés, inclus dans les pensions Confort et Passion.</li>
                    </ul>
                </p>
            </div>

            {/* TEXTE PENSIONS */}
            <div className='texte_pensions'>
                <h1>Pension COOL</h1>
                <p>
                    La pension cool, notre offre de base. Pas de cours inclus, mais la possibilité de profiter de nos installations et de
                    notre savoir-faire. Vous pouvez également prendre quelques leçons si vous le désirez avec une carte de propriétaire
                    (13 euros la leçon), sans durée minimale de validité. L'adhésion au club est annuelle, au tarif de 130 euros.
                </p>

                <p className='texte_tarif_pensions'>
                    <span className='bold_tarifs'>Tarif cheval/poney : 390 € / mois </span>
                    <span className="italic_tarifs">(hors foin et casier)</span>
                </p>
            </div>


            <div className='texte_pensions'>
                <h1>Pension CONFORT</h1>
                <p className='sous_titre_pensions'>avec 1 cours ou 1 marcheur ou 1 sortie paddock</p>
                <p>
                    La pension confort comprend en plus de l'offre de base : 1 cours par semaine, qui peut être au choix transformé en
                    1 sortie paddock ou 1 marcheur par nos soins. Avec la pension Confort, vous ne payez l'adhésion qu'à l'arrivée dans
                    le club. Elle est gratuite les années suivantes.
                </p>

                <p className='texte_tarif_pensions'>
                    <span className='bold_tarifs'>
                        Tarif shetland : 300 € – Tarif cheval : 430 € / mois </span>
                </p>
            </div>


            <div className='texte_pensions'>
                <h1>Pension PASSIONS</h1>
                <p className='sous_titre_pensions'>avec cours en illimité et entraînement personnalisé</p>
                <p>
                    La pension passion comprend : la possibilité de monter aux cours de votre niveau avec votre cheval ou les
                    chevaux d’instruction, à volonté. Avec la pension passion, vous ne payez l'adhésion qu'à l'arrivée dans le club.
                    Elle est gratuite les années suivantes.
                </p>

                <p className='texte_tarif_pensions'>
                    <span className='bold_tarifs'>Tarif shetland : 400 € – Tarif cheval : 530 € / mois</span>
                </p>
                <p>
                    <span className='italic_tarifs'>Les membres de la famille du propriétaire dont le cheval est en pension passion et qui souhaitent prendre un
                        forfait illimité, bénéficient d’un forfait illimité annuel cheval à 1 200 € au lieu de 1 770 €.</span>
                </p>
            </div>



            {/* PRESTATIONS COMPLEMENTAIRES */}
            <div className='Titre_prestations'>
                <h1>Prestations complémentaires</h1>
                <p className='sous_texte_presta'>
                    <span>(A noter : pour les prestations journalières, celles-ci peuvent être prises en compte jusque 17h le jour même.)

                    </span>
                </p>

                <p>
                    <ul className='liste_pensions'>
                        <li><span className='bold_pensions'>Travail du cheval :</span> à l’unité 25 € ou 240 € au mois (5 jours sur 7), 193 € le mois pour un engagement de 12 mois ferme</li>
                        <li><span className='bold_pensions'>Mise en liberté / Marcheur / Droit de piste monte ou longe (compris dans le travail au mois) :</span>  8 € à l’unité ou par mois 29 € pour 1x/sem, 55 € pour 2x/sem, 131 € pour 5x/semaine</li>
                        <li><span className='bold_pensions'>Les soins à suivre donnés par le vétérinaire</span> (tarif selon temps passé : 40€/heure – avec forfait minimum de 10€)</li>
                        <li><span className='bold_pensions'>Tontes :</span> 60 €</li>
                        <li><span className='bold_pensions'>Litière copeaux :</span> 40 €</li>
                        <li><span className='bold_pensions'>Parking du van hors pension cool et passion :</span> 20 € / mois</li>
                        <li><span className='bold_pensions'>La distribution de foin en sus de la ration :</span> 40 €</li>
                        <li><span className='bold_pensions'>Enlèvement et remise des bandes de repos quotidienne :</span> 25 €/mois (jusque 17h – au-delà remises par le propriétaire)</li>
                    </ul>
                </p>
            </div>

        </>
    );
}

export default PensionsComponent;