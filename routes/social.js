const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

router.get("/", socialController.authorize);

module.exports = router;