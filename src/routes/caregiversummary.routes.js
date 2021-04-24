const express = require('express')
const router = express.Router()
const caregiverSummaryController = require('../controllers/caregiversummary.controller');

router.get('/', caregiverSummaryController.findAll);
router.post('/', caregiverSummaryController.create);
router.get('/:id', caregiverSummaryController.findById);
router.put('/:id', caregiverSummaryController.update);
router.delete('/:id', caregiverSummaryController.delete);

module.exports = router