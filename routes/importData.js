var express = require('express');
var router = express.Router();
var con = require('../config/db')
var importDataController = require('../controller/importDataController')


router.get('/', importDataController.index);
router.post('/upload', importDataController.uploadFaceName)
router.get('/create-image', function(req, res){
    res.render('importData/create-image')
})
router.post('/store-image', importDataController.storeImage)



module.exports = router;
