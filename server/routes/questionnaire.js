const express = require('express');
const { requireAuth } = require('./middleware');
const { Questionnaire } = require('../database/schemas');

const router = express.Router();

module.exports = router;

router.post('/', requireAuth, (req, res) => {
    const newQuestionnaire = Questionnaire(req.body);

    newQuestionnaire.save((err, response) => {
        if (err) {
            res.status(400).send({ message: 'Create todo failed', err });
        } else {
            res.send({ message: 'Todo created successfully', questionnaire: response });
        }
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Questionnaire.findById(id, (err, doc) => {
        if (err) {
            res.status(500).send({ message: 'Error retrieving the questionnaire', err });
        }
        else {
            res.status(200).send({ message: 'Success', data: doc })
        }
    })
})

router.delete('/', requireAuth, (req, res) => {
    Questionnaire.findByIdAndRemove(req.body.id, err => {
        if (err) {
            res.status(400).send({ message: 'Delete questionnaire failed', err });
        } else {
            res.send({ message: 'Questionnaire successfully deleted' });
        }
    });
});

