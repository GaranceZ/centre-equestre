import React from 'react';
import '../../Styles/Site/Contact.css'

const ContactComponent = () => {
    return (
        <>
            <div className='image_haut_contact'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Contact/contact_haut.jpg'} alt="image d'un manège" />
            </div>

            <div className='Titre_contact'>
                <h1>Contactez-nous</h1>

                <div className="container_form">
                <div className="img_form">
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/logo_site.png'} alt='Logo du site' />
                        </div>
                    <div className="form">
                    <form className='contact'>
                        <input
                            className="input_contact"
                            type="text"
                            name="nom_contact"
                            id="nom_contact"
                            placeholder="Nom*"
                            required
                        />
                        <br />
                        <input
                            className="input_contact"
                            type="text"
                            name="prenom_contact"
                            id="prenom_contact"
                            placeholder="Prénom"

                        />
                        <br />
                        <input
                            className="input_contact"
                            type="text"
                            name="email_contact"
                            id="email_contact"
                            placeholder="Adresse mail*"
                            required

                        />
                        <br />
                        <input
                            className="input_contact"
                            type="text"
                            name="tel_contact"
                            id="tel_contact"
                            placeholder="Téléphone*"
                            required

                        />
                        <br />
                        <select name='Sujet'className="sujet_contact" required >
                            <option className="sujet_default" value="">--Sujet de votre message*-- &#9660;</option>
                            <option value="Anniversaire">Anniversaire</option>
                            <option value="Anniversaire">Baptême poney/cheval</option>
                            <option value="Anniversaire">Horaires</option>
                            <option value="Anniversaire">Tarifs</option>
                            <option value="Anniversaire">Pensions</option>
                        </select>
                        <br />
                        <textarea
                            className="textarea_contact"
                            name="message_contact"
                            id="message_contact"
                            placeholder="Message*"
                            required
                        ></textarea>
                        <br />
                        <div className='captcha_btn'>
                            <div className="captcha">

                            </div>
                        <button className="bouton_contact" type="submit">ENVOYER</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

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

export default ContactComponent;