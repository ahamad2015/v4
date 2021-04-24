const express = require('express')
const router = express.Router()
const caregiverController = require('../controllers/caregiver.controller');

router.get('/', caregiverController.findAll);
router.post('/', caregiverController.create);
router.get('/:id', caregiverController.findById);
router.put('/:id', caregiverController.update);
router.delete('/:id', caregiverController.delete);

module.exports = router