const express = require('express');
const router = express.Router();
const callbackController = require('../controllers/callbackController');

router.get('/', callbackController.callback);

module.exports = router;