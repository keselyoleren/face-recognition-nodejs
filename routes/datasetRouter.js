var express = require('express');
var router = express.Router();
var datasetController = require('../controller/DatasetController')


router.get('/', datasetController.index);

module.exports = router;
