// forEach - recebe uma função assim como Filter map e reduce. e tem os mesmo argumentos.
// porem nao retorna nada  - funciona como um for Classico.
const numeros = [ 1, 2, 3, 4, 5,]

total =0;
numeros.forEach(valor =>total +=valor)

console.log(total)