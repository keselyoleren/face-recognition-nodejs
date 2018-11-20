var express = require('express')
var con = require("../config/db")
var path =  require('path')
var formidable = require('formidable')
var fs = require('fs')
var mime = require('mime')
var upload_dir = path.join(__dirname, '../public/images')

const filetype = ['image/png', 'image/jpeg', 'image/jpg']

exports.index = function(req, res){
    con.query("SELECT * FROM dataset", function(err, row){
        if (err)
        console.log("error", err)
        res.render("importData/index", {data:row})
    })
}

exports.uploadFaceName = function(req, res, next){
    var nama = req.body.nama
<<<<<<< HEAD
    var image = req.files.image
    var action = req.body.action
    console.log(image)
    var sql = "INSERT INTO 'face'('nama', 'action', 'image') VALUES ('"+nama+"', '"+action+"', '"+image+"')";
=======
    var ai = req.body.ai
    var sql = "INSERT INTO `dataset`(`nama`,`ai`) VALUES ('"+nama+"','"+ai+"')";
>>>>>>> 6dbc14098cfc39236f9db709d47253ad4bf88a40
    con.query(sql, function(err, result){
        if(err)throw err;
        console.log("data saved")
    })
    res.render("importData/create-image")
}

exports.storeImage = function(req, res){
    var form = new formidable.IncomingForm()
    form.parse(req)

    form.on('fileBegin', function(name, file){
        file.path = path.join(__dirname, '../public/images/' + file.name)
    })
    form.on("file", function(name, file){
        var dataset_id = 1
        var file_path = file.path
        var file_name = file.name

        var data = "INSERT INTO `image`(`dataset_id`,`file_path`, `file_name`) VALUES ('"+dataset_id+"','"+file_path+"','"+file_name+"')"; 
        
        con.query(data, function(err, res){
            if(err)throw err;
            console.log("data saved")
        })
    })
    return res.json(200, {result: 'upload succes'})
}

