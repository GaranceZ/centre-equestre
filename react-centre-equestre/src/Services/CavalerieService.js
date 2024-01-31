import axios from "axios";
import { URL } from "./Config";

function getAllCheval(){
    return axios.get("http://"+URL+":8080/cavalerie")
}

function getCheval (){
    return axios.get("http://"+URL+":8080/cavalerie/cheval");
}

function getPoney (){
    return axios.get("http://"+URL+":8080/cavalerie/poney");
}

function addCheval(cheval){
    return axios.post("http://"+URL+":8080/cavalerie", cheval, {
        headers : {
        'Content-Type': 'application/json'
    }});
}

function removeCheval(id){
    return axios.delete("http://"+URL+":8080/cavalerie/" + id)
}

function updateCheval(id, modifiedName) {
    const url = `http://${URL}:8080/cavalerie/`; // Adjust the URL as needed
    const data = {
        id: id,
        modifiedNomCheval: modifiedName, // Assuming modifiedNomCheval is the expected property on the server
    };

    console.log('Request Data:', data);

    return axios.patch(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    getAllCheval,
    getCheval,
    getPoney,
    addCheval,
    removeCheval,
    updateCheval
}