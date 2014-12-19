/**

 The owner's solution

 var fs = require('fs')
 var file = process.argv[2]

 fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
 })
**/

// Requiring the FileSystem module & the Path module
var fs = require('fs');
var path = require('path');

// Callback function called on the ASync
function callback(error, data) {
 // Print it counter_lines if there is no error
 if(error==null) console.log(data.split('\n').length-1);
}

// Get it file BufferFile, solving it path dir
var fileName = process.argv[2]; //file name passed from the console
var pathOfTheFile = path.resolve(__dirname+"/jsons", fileName);
fs.readFile(pathOfTheFile, 'UTF-8',  callback);

