const express = require('express')
const router = express.Router()
const alertController = require('../controllers/alert.controller');

router.get('/', alertController.findAll);
router.post('/', alertController.create);
router.get('/:id', alertController.findById);
router.put('/:id', alertController.update);
router.delete('/:id', alertController.delete);

module.exports = router