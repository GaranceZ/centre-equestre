import axios from "axios";
import { URL } from "./Config";

function fetchAllMembres() {
    return axios.get("http://"+URL+":8080/user");
}

function addMembre(user){
    return axios.post("http://"+URL+":8080/user", user, {
        headers : {
        'Content-Type': 'application/json'
    }});
}

function removeUser(id){
    return axios.delete("http://"+URL+":8080/user/" + id)
}

function updateMember(id, nomUser, prenomUser, mailUser, phoneUser, mdpUser, galopUser, coursUser) {
    const url = `http://${URL}:8080/user/`; // Adjust the URL based on your API endpoint for updating members
    const data = {
        id: id,
        nomUser: nomUser,
        prenomUser: prenomUser,
        mailUser: mailUser,
        phoneUser: phoneUser,
        mdpUser: mdpUser,
        galopUser: galopUser,
        coursUser: coursUser,
    };

    console.log('Request Data:', data);

    return axios.patch(url, { ...data }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    fetchAllMembres,
    addMembre,
    removeUser,
    updateMember
};