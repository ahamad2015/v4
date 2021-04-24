const express = require('express')
const router = express.Router()
const loaController = require('../controllers/loa.controller');

router.get('/', loaController.findAll);
router.post('/', loaController.create);
router.get('/:id', loaController.findById);
router.put('/:id', loaController.update);
router.delete('/:id', loaController.delete);

module.exports = router