var express = require('express');
var con = require("../config/db");
var fs = require('fs')
var path = require('path')
var dirName = path.join(__dirname, '../public/images/')
var buffer = require('buffer').Buffer

exports.index = function(req, res){
    con.query("SELECT * FROM folder", function(err, result){
        if (err) {
            console.log("error", err);
        } else {
            res.render("dataset/index", {data:result});
        }
    });
}

exports.deleteDataset = function(req, res, next){
    var id = req.params.id
    var sql = "DELETE FROM dataset WHERE id = " + id
    con.query(sql, function(err, resulr){
        if(err){
            res.redirect('back')
        } else {
            res.redirect('back')
        }
    })
}

exports.createFolder = function(req, res){
    var namaFolder = req.body.nama
    
    var sql = "INSERT INTO `folder`(`nama`) VALUES ('"+namaFolder+"')";
    con.query(sql, function(err, result){
        if(err)throw err;
        console.log("data saved")
    })
    fs.mkdirSync(dirName + namaFolder, 777)
    res.redirect("back")
}

exports.getImgCamera = function(req, res, next){
    var id = req.params.id 
    var sql = "SELECT nama FROM folder WHERE id = " + id
    con.query(sql, function(err, result, fields){
        res.render('dataset/imageCamera', {
            id: id,
            nama: result[0].nama
        })
    }) 
    
}

exports.uploadFromCamera = function(req, res){
    var folderName = req.body.folder_name
    var folderID = req.body.folder_id
    var image = req.body.image
    var base64 = image.replace(/^data\:image\/\w+\;base64\,/, '')
    var imageName = folderName
    // res.send({base64})
    // upload data in folder
    var buf = Buffer.from(base64, 'base64')
    var dirImage = dirName + folderName 
    var image_path = ''
    fs.writeFile(image_path = path.join(dirImage,  imageName + '.png'), buf, function(error) {
        if (error) {
          throw error;
        } else {
          console.log("success");
          return true;
        }
    });

    // upload data in database
    var img = imageName + ".jpeg"

    var sql = "INSERT INTO `face_image`(`folder_id`,`image_name`,`image_path`) VALUES ('"+folderID+"','"+img+"','"+image_path+"')";  
    con.query(sql, function(err, result){
        if(err)throw err;
        console.log("data saved")
    })

    res.redirect('/dataset')

}

exports.subFolder  = function(req, res){
    con.query("SELECT nama FROM folder", function(err, result){
        if (err) {
            console.log("error", err);
        } else {
            res.send(result);
        }
    });
}