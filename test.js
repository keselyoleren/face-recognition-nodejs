var fs = require('fs')
var data = {"one" : [15, 4.5],
            "two" : [34, 3.3],
            "three" : [67, 5.0],
            "four" : [32, 4.1]};
var result = JSON.stringify(data)

fs.writeFile("example.json", result)