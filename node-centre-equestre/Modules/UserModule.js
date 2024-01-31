const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.get('/', (req,res) => {
    userService.fetchUser().then(
        (result) => {
            res.json({data:result});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});

router.get('/:id', (req,res) => {
    const currentId = req.params.id;
    userService.fetchUserByID(currentId).then(
        (result) => {
            res.json({data:result[0]});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
    userService.addUser(data).then(
        (result) => {
            res.json({ data: result[0], message:"Ajout en base de donnée réussi !" });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    });
    
});

router.delete('/:id', (req, res) => {
    const currentId = req.params.id;
    userService.deleteUser(currentId).then(
        (result) => {
            res.json({ data: result[0], message: `L'user' ${currentId} a bien été supprimé de la base de données` });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    })
});

router.patch('/', (req, res) => {
    const data = req.body;
    const userId = data.id;
    console.log(data);

    const updatedData = {
        id: userId,
        nomUser: data.nomUser,
        prenomUser: data.prenomUser,
        mailUser: data.mailUser,
        phoneUser: data.phoneUser,
        mdpUser: data.mdpUser,
        galopUser: data.galopUser,
        coursUser: data.coursUser,
    };

    userService.updateUser(updatedData)
        .then(result => {
            res.status(201).json(updatedData);  // Return only updatedData in the response
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'équipe' });
        });
});

module.exports = router;