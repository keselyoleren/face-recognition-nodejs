var mysql = require('mysql');
const db  = {
    host: "localhost",
    user: "root",
    password: "",
    database: "neuravision"
}

var con = mysql.createConnection(db);
con.connect(function(err) {
    if (err) throw err;
		console.log("Connected!");
});


module.exports = con