// retorne os pares com filter
//Retone a array com valores *2
//retorne a soma de todos os arrays

// retorte a soma do dobro dos numero pares

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const pares = numeros.filter(valor => (valor%2 ===0))
console.log(pares+' Todos os numero pares do array')
const dobro = numeros.map(valor =>(valor+= valor))
console.log(dobro)
console.log('Todos os valores do array dobrados')
const soma = numeros.reduce((acumulador,valor)=> acumulador += valor)
console.log(soma+' É a soma e todo o array')

const tudo  = numeros.filter(valor=>(valor%2===0)
.map(valor => valor += valor)
.reduce((acumulador,valor)=> acumulador += valor))

console.log(tudo+' é a soma do dobro de todos os pares.')