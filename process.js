/**
	SOLUÇÃO DO CRIADOR

  	var result = 0
    
    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])
    
    console.log(result)
**/


// Processo que captura os argumentos vindos no comando do prompt tipo: node process.js 1 2 3 e retorna um array
array = process.argv
somador = 0

// 2 porque o 0 é node e o 1 é o local onde foi executado
for(count = 2; count < array.length; count++) somador += parseInt(array[count])

// print final
console.log(somador)