var express = require('express');
var router = express.Router();
var datasetController = require('../controller/DatasetController')


router.get('/', datasetController.index);
router.get('/delete/(:id)', datasetController.deleteDataset)
module.exports = router;
