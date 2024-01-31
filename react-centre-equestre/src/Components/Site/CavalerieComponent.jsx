import React, { useEffect, useState } from 'react';
import '../../Styles/Site/Cavalerie.css'
import CavalerieService from '../../Services/CavalerieService';


const CavalerieComponent = () => {
    const [imageCheval, setImageCheval] = useState([]);
    const [imagePoney, setImagePoney] = useState([]);

    const fetchImagePoney = async () => {
        try {
            const response = await CavalerieService.getPoney();
            setImagePoney(response.data.data);
            console.log(response.data.data);
    }catch (err) {
        console.log(err);
    }
};

const fetchImageCheval = async () => {
    try {
        const response = await CavalerieService.getCheval();
        setImageCheval(response.data.data);
        console.log(response.data.data);
}catch (err) {
    console.log(err);
}
};

useEffect(() => {
    fetchImagePoney();
    fetchImageCheval();
}, []);


    return ( <>
   <div className='Titre_Cavalerie'>
                <h1>Nos poney</h1>
                <div className='PoneyContainer'>
                    {imagePoney.map((poney, index) => (
                        <div key={index} className='PoneyCard'>
                           <img src={process.env.PUBLIC_URL + `/assets/cheval_image/all/${poney.CH_Photo}`} loading='lazy'/>
                        <div className='cheval_nom'>{poney.CH_Nom}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='Titre_Cavalerie_chevaux'>
                <h1>Nos chevaux</h1>
                <div className='PoneyContainer'>
                    {imageCheval.map((cheval, index) => (
                        <div key={index} className='PoneyCard'>
                           <img src={process.env.PUBLIC_URL + `/assets/cheval_image/all/${cheval.CH_Photo}`} width={'300px'} height={'200px'}/>
                        <div className='cheval_nom'>{cheval.CH_Nom}</div>
                        </div>
                    ))}
                </div>
            </div>
    </> );
}
 
export default CavalerieComponent;