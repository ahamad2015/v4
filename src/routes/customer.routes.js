const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customer.controller');

router.get('/', customerController.findAll);
router.post('/', customerController.create);
router.get('/:id', customerController.findById);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

module.exports = router