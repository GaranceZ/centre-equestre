import axios from "axios";
import { URL } from "./Config";

async function AddConnexion(connexion) {
    try {
        const response = await axios.post("http://"+URL+":8080/connexion", { connexion }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {
            console.error('Error:', error); // Log the server's error message
            // Handle error if needed
        });
        console.log('Response:', response);
        // Handle success if needed
        return response; // You may want to return the response data here
    } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
        throw error; // You may want to throw the error to propagate it to the caller
    }
}



function getUserByEmail (email){
    return axios.get("http://"+URL+":8080/connexion/"+email);
}

export default {
    AddConnexion,
    getUserByEmail
}