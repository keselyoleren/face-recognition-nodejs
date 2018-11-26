var express = require('express');
var router = express.Router();
var trainController = require('../controller/trainController')


router.get('/', trainController.index);

router.get('/get_image_from_camera', function(req, res){
    res.render("train/get_image_from_camera")
})

router.post('/upload-from-camera', trainController.uploadFromCamera)

module.exports = router;
