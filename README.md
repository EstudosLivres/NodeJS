NodeJS
======

_Projeto usando o [__LearnYouNode__](http://nodeschool.io/#learn-you-node)_
Estudos e Testes em Node.JS em um Projeto com todas funcionalidades experimentadas <br>

__Tópicos__:

* Comandos Node;
* Comandos LearnYouNode;
* Entendimento Node.

### Comandos Básicos (Node)
----------------------------
* Exec arquivo
  * node arq.js


### Comandos Básicos (Learn)
----------------------------
* Teste exercício proposto
  * learnyounode verify arq.js
* Teste TDD
  * learnyounode run arq.js


### Pontos de Entendimentos
----------------------------
* __Process__: _Objeto que trás atributos da execução do Node. O attr argv (process.argv) é um vetor, em strings, dos parametros passados. Exemplo:_ __node process.js 1 2 3__ _irá mostrar: ['node', 'path', '1', '2', '3']_

* __Synchronous__:
 * __filesystem 'fs'__: <br>Serve para as manipulações de arquivo. É um objeto do tipo __synchronous__ e para utilizá-lo basta usar: __var fs = require('fs')__ e o uso da função __fs.readFileSync('/path/to/file')__ retorna um objeto __Buffer__ que pode ser passado para String: __var str = buf.toString()__
