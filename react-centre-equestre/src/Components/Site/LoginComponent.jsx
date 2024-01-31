import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import ConnexionService from '../../Services/ConnexionService';
import '../../Styles/Site/Login.css';
import { toast } from 'react-toastify';

const LoginComponent = () => {

    const { userEmail, setUserEmail, user, setUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [test, setTest] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            
            // Check if parsedUser is truthy before accessing its properties
            if (parsedUser) {
                setUserEmail(parsedUser.user_mail || '');
                setUser(parsedUser);
            }
        }
    }, [setUser, setUserEmail]);

    const [connexion, setConnexion] = useState({
        emailco: "",
        passwordco: "",
    });

    const handleChangeConn = (e) => {
        const { name, value } = e.currentTarget;
        setConnexion({ ...connexion, [name]: value });
        console.log(connexion);
    };

    const handleConn = async (e) => {
        e.preventDefault();
        try {
            const response = await ConnexionService.AddConnexion(connexion);
            console.log(response);
            setUserEmail(response.data.user.USER_Mail);
            setUser(response.data.user);

            console.log(response.data.user.USER_Mail);
            console.log(response.data.user);

            // // // Store user data in localStorage on successful login
             localStorage.setItem('user', JSON.stringify(response.data.user));

             if(response.data.user.USER_Role ==='admin'){
                toast.success(`Connexion réussie. Bienvenue, ${response.data.user.USER_Nom} ${response.data.user.USER_Prenom}!`);
            navigate('/admin/membres');
             }else{
                toast.success(`Connexion réussie. Bienvenue, ${response.data.user.USER_Nom} ${response.data.user.USER_Prenom}!`);
            navigate('/profil');
             }

            
        } catch (error) {
            console.log(error);
            toast.error('Connexion échouée');
        }
    };


    // TEST POUR LA CONNEXION :

    const fetchUserByEmail = async () => {
        try {
            const response = await ConnexionService.getUserByEmail(userEmail)
            setTest(response.data)

        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        // Fetch user data only if userEmail is available
        if (userEmail) {
            fetchUserByEmail();
            console.log("user data : ", user);
        }
    }, [userEmail, user]);




    return ( 
        <>
        <div className='image_fond_login'>
                
        

        <div className="container_form_login">
            <h1>Connexion</h1>
            <div className="img_form_login">
                            <img src={process.env.PUBLIC_URL + '/assets/logo_footer/logo_site.png'} alt='Logo du site' />
                        </div>
            <div className='form_login'>
            
            <form className='login'>
            <input type="email" name='emailco' placeholder="E-mail" className="input_login" value={connexion.emailco} onChange={handleChangeConn}/>
            <input type="password" name='passwordco'  placeholder="Mot de passe"  className="input_login" value={connexion.passwordco} onChange={handleChangeConn}/>
            <Link to={"/profil"}><input className="btn_login" type="submit" value="Se connecter" onClick={handleConn} /></Link>
            </form>
            <div className='password_forgotten'>
                <a href='#'><span className='forgotten'>Mot de passe oublié ? </span></a>
            </div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default LoginComponent;