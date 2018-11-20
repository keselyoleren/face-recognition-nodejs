var express = require('express');
var con = require("../config/db");

exports.index = function(req, res){
    con.query("SELECT * FROM dataset", function(err, result){
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

