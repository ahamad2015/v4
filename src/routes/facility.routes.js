const express = require('express')
const router = express.Router()
const facilityController = require('../controllers/facility.controller');

router.get('/', facilityController.findAll);
router.post('/', facilityController.create);
router.get('/:id', facilityController.findById);
router.put('/:id', facilityController.update);
router.delete('/:id', facilityController.delete);

module.exports = router