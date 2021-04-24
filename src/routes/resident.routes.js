const express = require('express')
const router = express.Router()
const residentController = require('../controllers/resident.controller');

router.get('/', residentController.findAll);
router.post('/', residentController.create);
router.get('/:id', residentController.findById);
router.put('/:id', residentController.update);
router.delete('/:id', residentController.delete);

module.exports = router