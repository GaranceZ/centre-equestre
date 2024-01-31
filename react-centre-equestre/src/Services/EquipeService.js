import axios from "axios";
import { URL } from "./Config";

function getEquipe () {
    return axios.get("http://"+URL+":8080/equipe");
}

function addEquipe(equipe){
    return axios.post("http://"+URL+":8080/equipe", equipe, {
        headers : {
        'Content-Type': 'application/json'
    }});
}

function removeEquipe(id){
    return axios.delete("http://"+URL+":8080/equipe/" + id)
}

function updateEquipe(id, nom_pedag, prenom_pedag, photo, poste1, poste2) {
    const url = `http://${URL}:8080/equipe/`;
    const data = {
        id: id,
        nom_pedag: nom_pedag,
        prenom_pedag: prenom_pedag,
        photo: photo,
        poste1: poste1,
        poste2: poste2,
    };

    console.log('Request Data:', data);

    return axios.patch(url,{ ...data }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    getEquipe,
    addEquipe,
    removeEquipe,
    updateEquipe
} ;