/*
    var fs = require('fs');
    var path = require('path');

    fs.readdir(process.argv[2], function (err, list) {
        list.forEach(function (file) {
            if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
        });
    });
*/

// Requiring the FileSystem module & the Path module
var fs = require('fs');
var path = require('path');

// Get the extension from the CommandLine extension
var path_name = process.argv[2];
var extension = "."+process.argv[3];

// Call after read the dir
function callback(error, list) {
    for(var i=0; i<list.length; i++) if(list[i].indexOf(extension) >= 0) console.log(list[i]);
}

// Read the Dir
fs.readdir(path_name, callback);