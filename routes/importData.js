var express = require('express');
var router = express.Router();
var con = require('../config/db')
var importDataController = require('../controller/importDataController')


router.get('/', importDataController.index);
router.post('/upload', importDataController.upload)




module.exports = router;
