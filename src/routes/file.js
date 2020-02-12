const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file');

router.post('/file', fileController.uploadfile);


module.exports = router;