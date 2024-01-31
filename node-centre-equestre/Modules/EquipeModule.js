const express = require('express');
const router = express.Router();
const equipeService = require('../services/EquipeService');

router.get('/', (req,res) => {
    equipeService.fetchEquipe().then(
        (result) => {
            res.json({data:result});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});

router.get('/:id', (req,res) => {
    const currentId = req.params.id;
    equipeService.fetchEquipeByID(currentId).then(
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
    equipeService.addEquipe(data).then(
        (result) => {
            res.json({ data: result[0], message:"Ajout en base de donnée réussi !" });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    });
    
});

router.delete('/:id', (req, res) => {
    const currentId = req.params.id;
    equipeService.deleteEquipe(currentId).then(
        (result) => {
            res.json({ data: result[0], message: `L'employé' ${currentId} a bien été supprimé de la base de données` });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    })
});

router.patch('/', (req, res) => {
    const data = req.body;
    const equipeId = data.id; // Extract cheval ID from the request body
    console.log('data : ',data);
    
    const updatedData = {
        id: equipeId,
        nom_pedag: data.nom_pedag, // Assuming nom_pedag is the property sent from the client
        prenom_pedag: data.prenom_pedag, // Assuming prenom_pedag is the property sent from the client
        photo: data.photo, // Assuming photo is the property sent from the client
        poste1: data.poste1, // Assuming poste1 is the property sent from the client
        poste2: data.poste2, // Assuming poste2 is the property sent from the client
    };

    equipeService.updateEquipe(updatedData)
        .then(result => {
            res.status(201).json(updatedData);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour de l\'équipe' });
        });
});

module.exports = router;