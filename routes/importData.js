var express = require('express');
var router = express.Router();
var con = require('../config/db')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('importData/index');
});

router.post('/upload', function(req, res, nexr){
  var nama = req.body.nama
  var image = "req.body.face_image"
  // con.connect(function(err){
  //   if(err) throw err;
  //   console.log("connected")
  //   var sql = "INSERT INTO `face`(`nama`,`image`) VALUES ('"+nama+"','"+image+"')";
  //   con.query(sql, function(err, result){
  //     if(err)throw err;
  //     console.log("data saved")
  //   })
  // })
  var db = con
  console.log(db)
  res.send("example")
})




module.exports = router;
