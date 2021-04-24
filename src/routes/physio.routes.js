const express = require('express')
const router = express.Router()
const physioController = require('../controllers/physio.controller');

router.get('/', physioController.findAll);
router.post('/', physioController.create);
router.get('/:id', physioController.findById);
router.put('/:id', physioController.update);
router.delete('/:id', physioController.delete);

module.exports = router