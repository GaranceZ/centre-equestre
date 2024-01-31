import React from 'react';
import '../../Styles/Site/Installations.css'
import SlideInstallation from './SlideInstallations';

const InstallationsComponent = () => {
    return (
        <>
            <div className='image_haut_installation'>
                <img src={process.env.PUBLIC_URL + '/assets/Images_Installations/install_01.jpg'} alt="image d'un manège" />
            </div>

            {/* TITRAGE iNSTALLATIONS */}
            <div className='Titre_install'>
                <h1>Nos installations</h1>
                <p>
                    Au coeur de la métropole de Lille-Roubaix-Tourcoing, le centre équestre les Cavalier du Harras vous accueille dans une ambiance conviviale et familiale.
                    Loisirs ou compétition, chaque cavalier trouvera son bonheur dans notre école d’équitation, reconnue pour son savoir faire depuis plus de 40 ans. Nos nombreuses
                    installations permettent à chacun de trouver la pratique équestre qui lui convient.</p>
            </div>

            <div className="liste_install">
                <div className='liste01'>
                    <ul>
                        <li>1 manège olympique de 67m x 25m</li>
                        <li>2 selleries fonctionnelles</li>
                        <li>1 carrière découverte (20 x 30 m)</li>
                        <li>1 marcheur 6 places</li>
                        <li>1 écurie fonctionnelle et propre avec de grands couloirs</li>
                        <li>1 tracteur et 1 bobcat</li>
                        <li>Plusieurs paddocks pour la mise en liberté des chevaux</li>
                    </ul>
                </div>
                
                <div className='liste02'>
                    <ul>
                        <li>75 boxes</li>
                        <li>Des casiers pour votre matériel</li>
                        <li>1 carrière couverte (70 x 30 m)</li>
                        <li>2 ronds de longe</li>
                        <li>1 parcours de cross sur 5 hectares de verdure</li>
                        <li>2 douches pour les chevaux</li>
                        <li>1 box de poulinage et 1 laboratoire pour les inséminations</li>
                    </ul>
                </div>
            </div>

            <div className='Slide_install'>
                <SlideInstallation />
            </div>
        </>
    );
}

export default InstallationsComponent;