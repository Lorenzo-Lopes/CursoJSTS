//MAP pega tres informações de um array (elemento/valor), (Indice), (array completo).
// quando voce chama o MAP ele voce pode passar esse 3 argumentos para um função que vai testalos
// casso o retorno da função seja 'TRUE' ele executa a alteração da função de callback
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numero2x = numeros.map(valor => valor*2+'')
console.log(numero2x)

const pessoas = [
    { nome:'Lorenzo', idade:25},
    { nome:'Maria', idade:23},
    { nome:'Eduardo', idade:55},
    { nome:'Leticia', idade:19},
    { nome:'Rosana', idade:89},
    { nome:'Wallace', idade:47}
]
const strNome = pessoas.map(valor=>valor.nome) 
console.log(strNome)
const removeNome = pessoas.map(obj => ({idade : obj.idade}))
console.log(removeNome)
const addId = pessoas.map((obj,id) => ({nome:obj.nome, idade:obj.idade, id:id+1}))
console.log(addId)
console.log (pessoas)