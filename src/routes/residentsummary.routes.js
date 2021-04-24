const express = require('express')
const router = express.Router()
const residentSummaryController = require('../controllers/residentsummary.controller');

router.get('/', residentSummaryController.findAll);
router.post('/', residentSummaryController.create);
router.get('/:id', residentSummaryController.findById);
router.put('/:id', residentSummaryController.update);
router.delete('/:id', residentSummaryController.delete);

module.exports = router