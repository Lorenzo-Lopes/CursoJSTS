function soma (x,y){
    return x+y;
}
soma(1,2)

document.addEventListener('click', function(){
    document.body.style.backgroundColor='grey'
})

function criaObjtPessoa(nome, sobrenome){
    return{nome,sobrenome}
}
const pessoa= criaObjtPessoa('lorenzo','lopes')
console.log(pessoa)

// Função que retorna uma função ...

function criaMultiplicador(multiplicador){
    return function(n){                              // retorna uma função que recebe N e faz a multiplicação pelo numero do argumento
        return multiplicador * n;
    }
}

const x2 = criaMultiplicador(2)
const x10 =criaMultiplicador(10)
console.log(x10(10))