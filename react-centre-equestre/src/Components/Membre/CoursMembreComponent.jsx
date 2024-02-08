import React from 'react';
import '../../Styles/Membre/CoursMembre.css'

const CoursMembreComponent = () => {
    return (
        <>
            <div className="cours_membre">
                <div class="nom_prenom">
                    <h1>Bonjour, Amélie Poulain</h1>
                    <p>Bienvenue sur la page de vos cours réservés. Ici vous pourrez retrouvés tous les cours que
                        vous avez réservés, qu’ils soient passés ou à venir.</p>
                </div>

                <div className="infos_cours_container">
                    <div class="child-div">
                        <h1>Cours à venir :</h1>
                        <div className="scrollable-wrapper">
                            <div className="scrollable-container">
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="child-div">
                        <h1>Cours passés :</h1>
                        <div className="scrollable-wrapper">
                            <div className="scrollable-container">
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                                <div class="sub-div">
                                    <p>2024-01-26 10:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="blankspace">
                    <p></p>
                </div>
            </div>

        </>);
}

export default CoursMembreComponent;