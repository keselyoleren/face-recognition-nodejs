var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var con = require('./config/db')
const { get } = require('request')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRuter = require('./routes/upload');
var importData = require('./routes/importData');
var datasetRouter  = require('./routes/datasetRouter')
var trainRouter = require("./routes/trainRouter")

var app = express();


const viewsDir = path.join(__dirname, 'views')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'weights')));
app.use(express.static(path.join(__dirname, 'public/images')))
app.use(express.static(path.join(__dirname, 'public/media')))
app.use(express.static(path.join(__dirname, 'public/weights')))


app.use('/', indexRouter);
app.use('/import-data', importData);
app.use('/users', usersRouter);
app.use('/upload', uploadRuter);
app.use('/dataset', datasetRouter)
app.use('/train', trainRouter)

app.get('/', (req, res) => res.redirect('/face_and_landmark_detection'))
app.get('/face_and_landmark_detection', (req, res) => res.sendFile(path.join(viewsDir, '/home/faceAndLandmarkDetection.html')))
app.get('/face_extraction', (req, res) => res.sendFile(path.join(viewsDir, '/home/faceExtraction.html')))
app.get('/face_recognition', (req, res) => res.sendFile(path.join(viewsDir, '/home/faceRecognition.html')))
app.get('/video_face_tracking', (req, res) => res.sendFile(path.join(viewsDir, '/home/videoFaceTracking.html')))
app.get('/webcam_face_tracking', (req, res) => res.sendFile(path.join(viewsDir, '/home/webcamFaceTracking.html')))
app.get('/bbt_face_landmark_detection', (req, res) => res.sendFile(path.join(viewsDir, '/home/bbtFaceLandmarkDetection.html')))
app.get('/bbt_face_similarity', (req, res) => res.sendFile(path.join(viewsDir, '/home/bbtFaceSimilarity.html')))
app.get('/bbt_face_matching', (req, res) => res.sendFile(path.join(viewsDir, '/home/bbtFaceMatching.html')))
app.get('/bbt_face_recognition', (req, res) => res.sendFile(path.join(viewsDir, '/home/bbtFaceRecognition.html')))
app.get('/batch_face_landmarks', (req, res) => res.sendFile(path.join(viewsDir, '/home/batchFaceLandmarks.html')))
app.get('/batch_face_recognition', (req, res) => res.sendFile(path.join(viewsDir, '/home/batchFaceRecognition.html')))
app.get('/get_image_from_camera', (req, res) => res.sendFile(path.join(viewsDir, '/train/get_image_from_camera.html')))

app.use(function(req, res, next){
  var err = new Error("kosong")
  err.status = 404;
  next(err)
})

app.get('/html', function(req, res) {
  res.render('index');
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
