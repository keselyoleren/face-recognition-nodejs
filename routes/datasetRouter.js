var express = require('express');
var router = express.Router();
var datasetController = require('../controller/DatasetController')
var con = require("../config/db");
var fs = require('fs')
var path = require('path')
var dirName = path.join(__dirname, '../public/images/')
var buffer = require('buffer').Buffer
var sharp = require('sharp');



router.get('/', datasetController.index);
router.get('/delete/(:id)', datasetController.deleteDataset)
router.post('/create-folder', datasetController.createFolder)
router.get('/open-folder/(:id)', datasetController.getImgCamera)
router.get('/imageCamera', function(req, res){
    res.send("example")
})
router.post("/upload-from-camera", datasetController.uploadFromCamera)
router.get("/sub-folder", datasetController.subFolder)
module.exports = router;

