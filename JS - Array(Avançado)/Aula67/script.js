// sonme todos os numero(reduce)
//return um array com os pares
//retorne um array com o dobro dos valores
// array com a soma dos pares e outra com dobro dos impares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const soma  = numeros.reduce( (acumulador, valor) => ( acumulador+=valor))
console.log(soma)

const nEven = numeros.reduce((ret,valor)=>{
    if(valor % 2 ===0) ret.push(valor)       
    return ret
},[])
console.log(nEven)

const nDouble = numeros.reduce((acumula,valor)=>{
    acumula.push(valor*2)
    return acumula
}, [])
console.log(nDouble)

const sumOdd = numeros.reduce((i,valor) =>{
    if(valor % 2 !==0) i += valor
    return i

},0)
console.log(sumOdd)

const sumEven = numeros.reduce((i,valor) =>{
    if(valor % 2 ===0) i += valor
    return i

},0)
console.log(sumEven)

const pessoas = [
    { nome:'Lorenzo', idade:25},
    { nome:'Maria', idade:23},
    { nome:'Eduardo', idade:55},
    { nome:'Leticia', idade:19},
    { nome:'Rosana', idade:89},
    { nome:'Wallace', idade:47}
]

const maisVelhas = pessoas.reduce((i,valor)=>{
    if (i.idade > valor.idade) return i
    return valor
})
console.log(maisVelhas)