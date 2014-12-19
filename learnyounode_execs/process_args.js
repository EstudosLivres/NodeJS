// The owner solution
/*
    var result = 0

    for (var i = 2; i < process.argv.length; i++)
        result += Number(process.argv[i])

    console.log(result)
*/


// What come from the agsv (which 1,2,3 was passed from the command line):
//  [ 'node', '/path/to/your/program.js', '1', '2', '3' ]
var counter = 0;
var args = process.argv;

// 2 porque o 0 é node e o 1 é o local onde foi executado
for(count = 2; count < args.length; count++) counter += Number(args[count]);

// print final
console.log(counter);