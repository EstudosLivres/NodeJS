/**

 The owner's solution

 var fs = require('fs')

 var contents = fs.readFileSync(process.argv[2])
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)

 **/

// Requiring the FileSystem module & the Path module
var fs = require('fs');
var path = require('path');

// Get it file BufferFile, solving it path dir
var fileName = process.argv[2]; //file name passed from the console
var pathOfTheFile = path.resolve(__dirname+'/jsons', fileName);
var fileIntBuffer = fs.readFileSync(pathOfTheFile, 'UTF-8');

// File converted from bin/buffer (array of bytes) into string
var fileStr = fileIntBuffer.toString();

// Print it file out
console.log(fileStr.split('\n').length-1);


