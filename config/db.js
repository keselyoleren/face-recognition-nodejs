var mysql = require('mysql')
const db  = {
    host: "localhost",
    user: "admin",
    password: "admin4321",
    database: 'neuravision'
}

var con = mysql.createConnection(db)
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});