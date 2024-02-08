const loginService = require('../services/LoginService');
const express = require('express');
const router = express.Router();
const conn = require('../services/database');
const crypto = require('crypto');
const SECRET = "MOTDEPASSE";
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
    const { connexion } = req.body;
    console.table(connexion);
    console.log('email :' + connexion.emailco);
    console.log('mdp : ' + connexion.passwordco);

    if (!connexion.emailco || !connexion.passwordco) {
        return res.status(400).json({ message: 'Veuillez entrer un email et un mot de passe corrects' });
    }

    try {
        console.log('Recherche de l\'utilisateur avec l\'email : ' + connexion.emailco);
        const user = await loginService.getUserByEmail(connexion.emailco);
        console.log(user);

        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(401).json({ message: 'Utilisateur inexistant' });
        }

        // On hash le mot de passe entré lors de la connexion
        const hashedPasswordco = crypto.createHash('sha256')
            .update(connexion.passwordco, 'utf-8')
            .digest('hex');
        console.log("Hashed", hashedPasswordco);
        console.log("Mot de passe de l'utilisateur", user.USER_Password);

        // Vérifier si le mot de passe correspond
        if (hashedPasswordco !== user.USER_Password) {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Si les identifiants sont corrects, générer et envoyer le jeton (token)
        const token = jwt.sign({
            user: user,
        }, SECRET, { expiresIn: '3 hours' });

        
        // Si tout est correct, renvoyer une réponse réussie
        res.status(200).json({ message: 'Connexion réussie', user: user, access_token: token })

    } catch (e) {
        console.log(e)
        res.status(500).json({ message: 'Erreur serveur lors de la vérification des identifiants' })
    }
});

router.get("/:email", async (req, res) => {
    loginService.getUserByEmail(req.params.email).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oopsi...", err);
        res.json({ "Message": "Error" + err.sqlMessage })
    })
});


module.exports = router;