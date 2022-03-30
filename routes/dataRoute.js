const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/:tab', dataController.getData);

module.exports = router;