let string = 'Lorenzo Lopes Costa'
/*
console.log(string.concat(' Lopes Costa'))
console.log(string+' Lopes'+' Costa');
console.log(`${string} Lopes Costa`)
*/
console.log(string.charAt('5')); // o charAt é utilizado para encontrar qual caractere esta na possisão selecionada.

console.log(string.indexOf('o'));// indexOf é utilizado para ver o valor do indice de um determinado caractere dentro do string (Existe tambem o lastIndexOf que faz o procedimento comeeçando do final da string)

console.log(string.match(/L/g))// utilizado com expressões regulares

console.log(string.search(/L/g))// ele procura o lugar onde esta o valor solicitado

console.log(string.replace('Lorenzo','Rei Supremo'))//replace, troca os caracteres da string pelos desejados

console.log(string.length)// mostra o total de caracteres.

console.log(string.slice(2, 6));// exibe apenas os indices selecionados

console.log(string.split('o')) //corta a string no lugares onde o carectere foi encontrado e retorna um arry

console.log(string.toLowerCase())
console.log(string.toUpperCase())




