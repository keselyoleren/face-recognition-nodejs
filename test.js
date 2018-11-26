var fs = require('fs')

var folder = "example"
var dirname = "public/images/" + folder

fs.mkdirSync(dirname, 0o776)