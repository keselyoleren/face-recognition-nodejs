var express = require('express')
var con = require("../config/db")

exports.index = function(req, res){
    res.render("dataset/index")
}

