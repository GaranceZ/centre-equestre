const express = require('express');
const router = express.Router();
const chevalService =require('../services/ChevalService');

router.get('/', (req,res) => {
    chevalService.fetchAllChevaux().then(
        (result) => {
            res.json({data:result});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});

router.get('/cheval', (req,res) => {
    chevalService.fetchCheval().then(
        (result) => {
            res.json({data:result});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});

router.get('/poney', (req,res) => {
    chevalService.fetchPoney().then(
        (result) => {
            res.json({data:result});
        }
    ).catch(() => {
        res.json({message: 'une erreur est survenue'})
    });
});


router.get('/:id', (req,res) => {
    const currentId = req.params.id;
    chevalService.fetchChevalByID(currentId).then(
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
    chevalService.addCheval(data).then(
        (result) => {
            res.json({ data: result[0], message:"Ajout en base de donnée réussi !" });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    });
    
});


router.delete('/:id', (req, res) => {
    const currentId = req.params.id;
    chevalService.deleteCheval(currentId).then(
        (result) => {
            res.json({ data: result[0], message: `Le cheval ${currentId} a bien été supprimé de la base de données` });
        }
    ).catch(() => {
        res.json({ message: 'Une erreur est survenue' });
    })
});

router.patch('/', (req, res) => {
    const data = req.body;
    const chevalId = data.id; // Extract cheval ID from the request body
    console.log(data);
    
    // Modify the data object to match the client-side property names
    const updatedData = {
        id: chevalId,
        modifiedName: data.modifiedNomCheval, // Assuming modifiedNomCheval is the property sent from the client
    };

    chevalService.updateCheval(updatedData)
        .then(result => {
            res.status(201).json({ data: result, message: `Le cheval a bien été mis à jour` });
        }) 
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour du cheval' });
        });
});

module.exports = router;