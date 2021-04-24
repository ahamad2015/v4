const express = require('express')
const router = express.Router()
const questionnaireController = require('../controllers/questionnaire.controller');

router.get('/', questionnaireController.findAll);
router.post('/', questionnaireController.create);
router.get('/:id', questionnaireController.findById);
router.put('/:id', questionnaireController.update);
router.delete('/:id', questionnaireController.delete);

module.exports = router