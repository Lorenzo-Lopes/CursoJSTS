// valor por referencia >> se eu definir uma nova varia com uma array ja existente as duas são alterada
// const nomes =  ['Lorenzo','Eduardo','Matheus','Bruno'] Forma mais comum de declaração de um array
//Outra forma é unsado o construtor
const nomes = new Array('Lorenzo','Eduardo','Matheus','Bruno')
const novo = [...nomes] //  utilizando o SPREAD, assim se a array nomes for alterada a arrat 'novo' mantei seu valor.
console.log(nomes)
/*
console.log(novo)
nomes.push('aaaa')// add no fim
console.log(nomes)
nomes.pop()// remove do fim
console.log(nomes+ '     AQUI FOI EXECUTADO UM POP.')
//nomes. push('joao', 'jose')// add no fim
nomes.unshift('jose', 'joao')//add no começo
console.log(nomes)
nomes.shift()// remove do começo
console.log(nomes)
*/
console.log(nomes.slice(0,2))// Slice recebe dois valores que são os indices do array para criar um lista do indici x ao y-1


const nome = ['Lorenzo', 'Lopes', 'Costa']

console.log(nome.join(' '))  // pegar um array e torna um array separado pelo caracte desejado.
         