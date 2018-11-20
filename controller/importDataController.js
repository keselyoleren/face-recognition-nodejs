var express = require('express')
var con = require("../config/db")


exports.index = function(req, res){
    con.query("SELECT * FROM face", function(err, row){
        if (err)
        console.log("error", err)
        res.render("importData/index", {data:row})
    })
    // res.render('importData/index')
}

exports.upload = function(req, res, next){
    var nama = req.body.nama
    var image = req.files.image
    var action = req.body.action
    console.log(image)
    var sql = "INSERT INTO 'face'('nama', 'action', 'image') VALUES ('"+nama+"', '"+action+"', '"+image+"')";
    con.query(sql, function(err, result){
        if(err)throw err;
        console.log("data saved")
    })
 
    res.redirect('back')
}