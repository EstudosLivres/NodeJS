//modular.js
var lslib = require('./filter_lib_module');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function(err, files) {
    for (i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});