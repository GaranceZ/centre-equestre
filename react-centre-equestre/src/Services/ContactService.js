import axios from "axios";
import { URL } from "./Config";

function sendEmailContact(formData){
    return axios.post("http://"+URL+":8080/contact", formData,
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default {
    sendEmailContact
};