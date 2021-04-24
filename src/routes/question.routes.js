const express = require('express')
const router = express.Router()
const questionController = require('../controllers/question.controller');

router.get('/', questionController.findAll);
router.post('/', questionController.create);
router.get('/:id', questionController.findById);
router.put('/:id', questionController.update);
router.delete('/:id', questionController.delete);

module.exports = router