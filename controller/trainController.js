var express = require('express');
var con = require("../config/db");
var path = require('path')
var fromidable = require('formidable')

exports.index = function(req, res){
    res.render('train/index')
}

exports.uploadFromCamera = function(req, res){
    var fs = require('fs')
    var image = req.body.image
    var data  = image.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile('img_func.jpg',buf,function(err) {
        console.log(err);
    });
    res.send(data)

    var form = new fromidable.IncomingForm()
    form.parse(req)

    form.on('fileBegin', function(name, file){
        console.log(file)
        file.path = path.join(__dirname, '../public/images/' + file.image)
    })
    
    form.on("file", function(name, file){
        console.log(file)
    })

    res.send("example")
}


