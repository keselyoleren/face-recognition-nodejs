var express = require('express');
var con = require("../config/db");
var fs = require('fs')
var path = require('path')
var dirName = path.join(__dirname, '../public/images/')
var buffer = require('buffer').Buffer
const sharp = require('sharp');


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

exports.uploadFromCamera = function(req, res, callback){

    var folderName = req.body.folder_name
    var folderID = req.body.folder_id
    var image = req.body.image
    var base64 = image.replace(/^data\:image\/\w+\;base64\,/, '')
    var id = Math.floor(Math.random() * 100 + 1)
    // var imageName = folderName + id
    
               
        fs.readdir(dirName + folderName, function (err, files) {

            var imageName = null
            var maxFileSavedName = []
            var imgId = 0

            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } else {
                var remaining = files.length

                if (remaining == 0){
                    //maxFileSavedName[0] = 1
                    imgId += 1
                } else {
                    for (var i = 0; i < files.length; i++) {
                        var filename_split_ext = files[i].split('.')
                        var filename_split_textNumber = filename_split_ext[0].split(/([0-9]+)/)
                        maxFileSavedName.push(parseInt(filename_split_textNumber[1]))
                    }
                    imgId = maxFileSavedName[maxFileSavedName.length - 1] + 1
                }

                
                
                // if (maxFileSavedName.length == 0) {
                //     imageName = folderName + maxFileSavedName[0].toString()
                // }
                
                var maxNum = Math.max(...maxFileSavedName)
                var nextNum = maxNum + 1
                imageName = folderName + imgId.toString()
    
                // upload data in folder
                var buf = Buffer.from(base64, 'base64')
                var dirImage = dirName + folderName 
                var image_path = path.join(dirImage,  imageName + '.png')
    
                // resize image 
                var neura = sharp(buf)
                    .grayscale()
                    .resize(150, 150)
                    .toBuffer()
                    .then( data => {
                        fs.writeFileSync(image_path, data);
                    })
                    .catch( err => {
                        console.log(err);
                });
                // --end of resize image
    
                // upload data in database
                var img = imageName + ".png"
    
                var sql = "INSERT INTO `face_image`(`folder_id`,`image_name`,`image_path`) VALUES ('"+folderID+"','"+img+"','"+image_path+"')";  
                con.query(sql, function(err, result){
                    if(err)throw err;
                    console.log("data saved")
                })
                res.redirect('/dataset')

            }

            callback(null, maxFileSavedName)
        });

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