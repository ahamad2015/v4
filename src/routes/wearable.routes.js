const express = require('express')
const router = express.Router()
const wearableController = require('../controllers/wearable.controller');

router.get('/', wearableController.findAll);
router.post('/', wearableController.create);
router.get('/:id', wearableController.findById);
router.put('/:id', wearableController.update);
router.delete('/:id', wearableController.delete);

module.exports = router