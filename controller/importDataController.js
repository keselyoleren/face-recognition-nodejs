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
    var dataset_name = req.body.dataset_name
    // var image = req.files.image
    var action = req.body.action
    var image = 'example.jpg'
    var sql = "INSERT INTO `dataset`(`dataset_name`, `dataset_action`, `dataset_image_location`) VALUES ('"+dataset_name+"', '"+action+"', '"+image+"')";
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
        console.log(file_name, file_path, dataset_id)
        var data = "INSERT INTO `image`(`dataset_id`,`file_path`, `file_name`) VALUES ('"+dataset_id+"','"+file_path+"','"+file_name+"')"; 
        
        con.query(data, function(err, res){
            if(err)throw err;
            console.log("data saved")
        })
    })
    res.render("back")
    return res.json(200, {result: 'upload succes'})
}

