var express = require('express');
var con = require("../config/db");
var faceapi = require("face-api.js")

var path = require('path')
var fromidable = require('formidable')
var fs = require('fs')

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

exports.trainDataset = async function(req, res){
    try {
        const classes = []
        var numImagesForTraining = 1
        var maxAvailableImagesPerClass = 5
        numImagesForTraining = Math.min(numImagesForTraining, maxAvailableImagesPerClass)

        var dirName = path.join(__dirname, '../public/images/')

        fs.readdirSync(dirName).forEach(file => {
            classes.push(file)
        })

        // const labeledFaceDescriptors = await Promise.all(classes.map(
        //     async className => {
        //         const descriptors = []
        //         for (let i = 1; i < (numImagesForTraining + 1); i++) {
        //             const img = await faceapi.fetchImage(className + "/" +className + ".png")
        //             descriptors.push(await faceapi.computeFaceDescriptor(img))
        //         }

        //         return new faceapi.LabeledFaceDescriptors(
        //             className,
        //             descriptors
        //         )
        //     }
            
        // ))
        var labeledFaceDescriptors = await Promise.all(classes.map(
            async className => {
                const descriptors = []
                for(var i = 1; i < (numImagesForTraining + 1); i++){
                    const img = await faceapi()
                    console.log(img)
                }
            }
        ))
        // console.log(labeledFaceDescriptors)
        res.send(labeledFaceDescriptors)    

    } catch (error) {
        console.log(error)
    }
}


