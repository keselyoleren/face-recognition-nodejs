var express = require('express');
var con = require("../config/db");

exports.index = function(req, res){
<<<<<<< HEAD
    con.query("SELECT * FROM dataset", function(err, result){
        if (err) {
            console.log("error", err);
        } else {
            res.render("dataset/index", {dataset:result});
        }
    });
=======
    con.query("SELECT * FROM dataset", function(err, row){
        if(err)
        console.log("error", err)
        console.log(row)
        res.render('dataset/index', {data:row})
    })    
>>>>>>> 6dbc14098cfc39236f9db709d47253ad4bf88a40
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

