const express = require('express')
const router = express.Router()
const notificationController = require('../controllers/notification.controller');

router.get('/', notificationController.findAll);
router.post('/', notificationController.create);
router.get('/:id', notificationController.findById);
router.put('/:id', notificationController.update);
router.delete('/:id', notificationController.delete);

module.exports = router