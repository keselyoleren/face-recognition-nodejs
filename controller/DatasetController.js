var express = require('express');
var con = require("../config/db");

exports.index = function(req, res){
    con.query("SELECT * FROM dataset", function(err, result){
        if (err) {
            console.log("error", err);
        } else {
            res.render("dataset/index", {dataset:result});
        }
    });
}
