var express = require('express');
var router = express.Router();
var trainController = require('../controller/trainController')


router.get('/', trainController.index);
// router.get("/", function(req, res){
//     res.render("train/index")
// })

module.exports = router;
