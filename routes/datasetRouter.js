var express = require('express');
var router = express.Router();
var datasetController = require('../controller/DatasetController')


router.get('/', datasetController.index);
router.get('/delete/(:id)', datasetController.deleteDataset)
router.post('/create-folder', datasetController.createFolder)
router.get('/open-folder/(:id)', datasetController.getImgCamera)
router.get('/imageCamera', function(req, res){
    res.send("example")
})
router.post("/upload-from-camera", datasetController.uploadFromCamera)
// router.post("/upload-from-camera", function(req, res){
//     res.send("example")
// })
router.get("/sub-folder", datasetController.subFolder)
module.exports = router;
