const express = require('express')
const router = express.Router()
const wardController = require('../controllers/ward.controller');

router.get('/', wardController.findAll);
router.post('/', wardController.create);
router.get('/:id', wardController.findById);
router.put('/:id', wardController.update);
router.delete('/:id', wardController.delete);

module.exports = router