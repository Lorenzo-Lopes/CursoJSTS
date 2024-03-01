// FILTER - pega tres informações de um array (elemento/valor), (Indice), (array completo).
// quando voce chama o filter voce pode passar esse 3 argumentos para um função que vai testalos
// casso o retorno da função seja 'TRUE'  o Filter cria um novo array e adicio esse (elemnto/valor)




const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
/*
let filtro=[]
for(let valor of numeros){
    if(valor>10) {
        console.log(valor)
        filtro.splice(filtro.length,0,valor)
    }
}
console.log(filtro)
*/


const filtro = numeros.filter(valor=>  valor>10)
console.log(filtro)

//Retorne  as pessoas cque tem o nome com 6 ou mais letras
//Retorne pessoas com mais de 50 anos.
const pessoas = [
    { nome:'Lorenzo', idade:25},
    { nome:'Maria', idade:23},
    { nome:'Eduardo', idade:55},
    { nome:'Leticia', idade:19},
    { nome:'Rosana', idade:89},
    { nome:'Wallace', idade:47}
]//(indice.nome>=6))
console.log(pessoas[1])
const nomes6mais = pessoas.filter(valor => valor.nome.length>=6)
console.log(nomes6mais)
const idade50mais = pessoas.filter(objeto => objeto.idade>50)
console.log(idade50mais)
const nomeLetraInicial = pessoas.filter(objeto => objeto.nome.toLowerCase().startsWith('l'))
console.log(nomeLetraInicial)