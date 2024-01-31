import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarSite from './Components/Site/NavbarSite';
import Footer from './Components/Site/Footer';
import HomePage from './Views/Site/HomePage';
import InstallationsPage from './Views/Site/InstallationsPage';
import EquipePage from "./Views/Site/EquipePage";
import CavaleriePage from "./Views/Site/CavaleriePage";
import BaptemePage from "./Views/Site/BaptemePage";
import AnniversairePage from "./Views/Site/AnniversairePage";
import HorairesPage from "./Views/Site/HorairesPage";
import TarifsPage from "./Views/Site/TarifsPage";
import PensionsPage from "./Views/Site/PensionsPage";
import ContactPage from "./Views/Site/ContactPage";
import LoginPage from "./Views/Site/LoginPage";
import ProfilMembrePage from "./Views/Membre/ProfilMembrePage";
import ParametreMembrePage from "./Views/Membre/ParametreMembrePage";
import CoursMembrePage from "./Views/Membre/CoursMembrePage";
import InscriptionCoursMembrePage from "./Views/Membre/InscriptionCoursMembre";
import ListeMembrePage from "./Views/Admin/ListeMembrePage";
import ListeChevauxPage from "./Views/Admin/ListeChevauxPage";
import ListeEquipePedagPage from "./Views/Admin/ListeEquipePedagPage";

import GlobalContext from "./Context/GlobalContext";
import { useState , useEffect} from "react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {

   // Initialisez l'état userEmail en récupérant la valeur depuis le localStorage
 const [userEmail, setUserEmail] = useState(window.localStorage.getItem('userEmail'));
 const [user, setUser] = useState(null);

// Effet pour mettre à jour le localStorage lorsque userId change
useEffect(() => {
  if (userEmail !== null) {
    localStorage.setItem('userEmail', userEmail.toString());
  } else {
    // Si userEmail est null, supprimez-le du localStorage
    localStorage.removeItem('userEmail');
  }
}, [userEmail]);
  return (
    <>
    <GlobalContext.Provider value={{userEmail, setUserEmail, user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/installations"} element={<InstallationsPage />} />
          <Route path={"/equipe"} element={<EquipePage />} />
          <Route path={"/cavalerie"} element={<CavaleriePage />} />
          <Route path={"/bapteme"} element={<BaptemePage />} />
          <Route path={"/anniversaire"} element={<AnniversairePage />}/>
          <Route path={"/horaires"} element={<HorairesPage />}/>
          <Route path={"/tarifs"} element={<TarifsPage />}/>
          <Route path={"/pensions"} element={<PensionsPage />}/>
          <Route path={"/contact"} element={<ContactPage />}/>
          <Route path={"/login"} element={<LoginPage />}/>

          {/* Route pour la page membre */}
          <Route path={"/profil"} element={<ProfilMembrePage />}/>
          <Route path={"/parametres"} element={<ParametreMembrePage />}/>
          <Route path={"/mescours"} element={<CoursMembrePage/>}/>
          <Route path={"/inscription-cours"} element={<InscriptionCoursMembrePage/>}/>

          <Route path={"/admin/membres"} element={<ListeMembrePage />}/>
          <Route path={"/admin/chevaux"} element={<ListeChevauxPage />}/>
          <Route path={"/admin/equipe"} element={<ListeEquipePedagPage />}/>
        </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />

    </>
  );
}

export default App;
