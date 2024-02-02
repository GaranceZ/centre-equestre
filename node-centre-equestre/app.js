// app.js
const express = require('express')
const app = express();
const port = 8080;
const cors = require("cors");


app.use(express.json());
app.use(cors({
    // origin : "http://"+URL+":3000",
    // origin:"http://localhost:3000"
}));

const chevalModule = require('./Modules/ChevalModule');
const equipeModule = require('./Modules/EquipeModule');
const userModule = require('./Modules/UserModule');
const loginModule = require('./Modules/LoginModule');
const contactModule = require('./Modules/ContactModule');

app.get('/', (req, res) => {
    res.send('Hello, Wozerz!');
});

app.use("/cavalerie", chevalModule);
app.use("/equipe", equipeModule);
app.use("/user", userModule);
app.use("/connexion", loginModule);
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(contactModule);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});