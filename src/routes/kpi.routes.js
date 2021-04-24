const express = require('express')
const router = express.Router()
const kpiController = require('../controllers/kpi.controller');

router.get('/', kpiController.findAll);
router.post('/', kpiController.create);
router.get('/:id', kpiController.findById);
router.put('/:id', kpiController.update);
router.delete('/:id', kpiController.delete);

module.exports = router