const express = require('express')
const router = express.Router()
const roomController = require('../controllers/room.controller');

router.get('/', roomController.findAll);
router.post('/', roomController.create);
router.get('/:id', roomController.findById);
router.put('/:id', roomController.update);
router.delete('/:id', roomController.delete);

module.exports = router