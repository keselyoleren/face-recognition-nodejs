var mysql = require('mysql')
const db  = {
    host: "localhost",
    user: "root",
    password: "root",
    database: 'neuravision'
}

var con = mysql.createConnection(db)

module.exports = db;