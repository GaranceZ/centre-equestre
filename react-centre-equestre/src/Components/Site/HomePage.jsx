import React from 'react';
import '../../Styles/Site/HomePage.css'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { fadeIn } from 'react-animations'

const HomePageComponent = () => {
    return (
        <>
            <div className='image_haut_homepage'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Homepage/slide.jpg'} alt="image d'une jeune fille et son cheval"/>
            </div>

            {/* TITRAGE HOMEPAGE */}
            <div className='Bienvenue'>
                <h1>Bienvenue chez les Cavaliers du Harras</h1>
                <p>
                    Le Centre Équestre "Les Cavaliers du Haras" est un lieu idyllique où passion et élégance se rencontrent. Spécialisé dans l'art équestre,
                    notre centre offre une gamme complète d'activités pour les amateurs de chevaux de tous âges.</p>

                <p> Nos instructeurs qualifiés dispensent des cours adaptés à tous les niveaux, du débutant au cavalier confirmé. Que vous souhaitiez
                    apprendre les bases de l'équitation ou perfectionner votre technique, notre équipe dévouée est là pour vous accompagner.</p>

                <p>Nous sommes également ravis d'accueillir des célébrations spéciales au sein de notre établissement. Les anniversaires équestres
                    sont une option unique pour les enfants et les adultes, combinant plaisir, éducation et interaction avec nos chevaux bien-aimés.</p>

                <p>Pour ceux qui cherchent une résidence confortable pour leurs chevaux, nous proposons des pensions de qualité avec des installations
                    modernes et un personnel attentif assurant le bien-être des équidés.</p>

                <p>Enfin, notre centre abrite un élevage de chevaux de race soigneusement sélectionnés, contribuant à préserver la beauté et la
                    grâce de ces animaux magnifiques.</p>

                <p><span className='bold_text'>Rejoignez-nous aux Cavaliers du Haras, où l'amour des chevaux prend vie à travers des cours enrichissants, des célébrations
                    inoubliables, des pensions attentives et un élevage dédié à la préservation de la noblesse équine.</span>
                </p>
            </div>

            {/* CHIFFRES HOMEPAGE */}
            <div className="container_all_chiffres">
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
                <div className="container_size">
                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>
                                {isVisible ? <CountUp end={60} duration={2.75}/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            heures de cours 7/7 jours par
                            semaine et 1 600 heures de leçons
                            par mois
                        </div>
                    </div>

                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>{isVisible ? <CountUp end={120} duration={2.75}/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            tonnes d'aliments complet
                        </div>
                    </div>

                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>{isVisible ? <CountUp end={280} duration={1.5}/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            tonnes de paille
                        </div>
                    </div>

                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>{isVisible ? <CountUp end={30} duration={2.75}/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            tonnes d'avoine et d'orge
                        </div>
                    </div>

                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>{isVisible ? <CountUp end={30} duration={2.75}/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            tonnes de foin
                        </div>
                    </div>

                    <div className='container_chifres'>
                        <div className="chiffres_homepage">
                            <h2>{isVisible ? <CountUp end={1460000} duration={2.75} separator=" "/>:null}</h2>
                        </div>
                        <div className="desc_chiffres_homepage">
                            litres d'eau
                        </div>
                    </div>

                    <div className="texte_container_chiffres">
                        <p>Des balais, de la peinture, beaucoup d’huile de coude et de la bonne humeur !</p>
                    </div>
                </div>
                )}
                </VisibilitySensor>
            </div>


            {/* PARTIE LABELS HOMEPAGE */}

            <div className="container_labels">
                <h1>Nos labels</h1>
                <div className="container_images_labels">
                    <a href='https://www.ffe.com/pratiquer/labels/ecole-francaise-d-equitation' className="imagelabels">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Images_Homepage/labels-FFE.png'}
                            alt='Icone FFE'
                            className="imagelabels"
                        />
                    </a>
                    <a href='https://www.ffe.com/pratiquer/labels/mention-bien-etre-animal' className="imagelabels">
                        <img
                            src={process.env.PUBLIC_URL + '/assets/Images_Homepage/Logo_BEA-RVB.jpg'}
                            alt='Icone Bien être'
                            className="imagelabels"
                        />
                    </a>
                </div>
                <p className='texte_labels'>
                    Votre centre equestre est engagé dans une démarche qualité validé par la FFE au travers d’une inspection tous les deux ans !
                </p>
            </div>


            {/* PARTIE MAP */}
            <div className="map_infos_container">
                <h1>Nous trouver</h1>
                <div className="map_infos">
                    <div className="map_homepage">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.864726958675!2d3.113156776837729!3d50.648203371630615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c329463a7b6fcd%3A0x59b228330cbf3364!2sForEach%20Academy!5e0!3m2!1sfr!2sfr!4v1706020229704!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    <div class="infos_homepage">
                        <div className="img_infos_homepage">
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/logo_site.png'} alt='Logo du site' />
                        </div>
                        <h2> Les Cavaliers du Harras</h2>
                        <ul>
                            <li>1 rue des chevaux</li>
                            <li>59960 Neuville-en-Ferrain</li>
                            <li>03.20.25.22.71</li>
                            <li><a href="mailto:contact.harras@gmail.com">contact.harras@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomePageComponent;