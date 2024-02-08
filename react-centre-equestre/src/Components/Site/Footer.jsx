import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Site/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='main_newsletter'>
                <div className='follow_us'>
                    <p>Suivez-nous !</p>
                    <div className="social">
                    <div className='facebook'>
                        <a href='https://www.facebook.com'>
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/icon_facebook.png'} alt='Facebook Icon' />
                        </a>
                    </div>
                    <div className='instagram'>
                        <a href='https://www.instagram.com'>
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/icon_insta.png'} alt='Instagram Icon' />
                        </a>
                    </div>
                    <div className='tiktok'>
                        <a href='https://www.tiktok.com'>
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/icon_tiktok.png'} alt='Tiktok Icon' />
                        </a>
                    </div>
                    </div>
                </div>

                <div className='newsletter'>
                    <p>Newsletter</p>
                    <input type='mail' placeholder='Inscrivez ici votre adresse mail' name='mail_news' className='mail_news'></input>
                    <button type='submit' className='newsletterBtn' name='newsletterBtn'>S'inscrire</button>
                </div>

            </div>

            <div className='main_all_infos'>
                <div className='info_gauche'>
                    <div className='logo_gauche'>
                        <img src={process.env.PUBLIC_URL + '/assets/logo_footer/logo_site.png'} alt='Logo du site' />
                    </div>
                    <div className='texte_gauche'>
                        <h2> Les cavaliers du Harras</h2>
                        <ul>
                            <li>1 rue des chevaux</li>
                            <li>59960 Neuville-en-Ferrain</li>
                            <li>03.20.25.22.71</li>
                            <li><a href="mailto:contact.harras@gmail.com">contact.harras@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="info_milieu">
                    <div className='texte_milieu'>
                        <h2>Horaires</h2>
                        <ul>
                            <li>Lundi, Mardi, Jeudi, Vendredi :</li>
                            <li>14h00 – 18h30</li>
                            <li>Mercredi, Samedi, Dimanche :</li>
                            <li>10h00 – 12h00 / 14h00 - 18h30</li>
                        </ul>
                    </div>
                </div>

                <div className="info_droite">
                    <div className='texte_droite'>
                        <h2>Informations</h2>
                        <ul>
                            <li><Link to={"/login"}>Membre ?</Link></li>
                            <li><Link to={"/contact"}>Nous contacter</Link></li>
                            <li><a href='#'>Mentions légales</a></li>
                        </ul>
                    </div>

                    <div className='logo_droite'>
                        <img src={process.env.PUBLIC_URL + '/assets/logo_footer/logo_site.png'} alt='Logo du site' />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Footer;

