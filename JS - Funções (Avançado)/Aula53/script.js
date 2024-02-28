//Closures
function retornaFuncao(){
    //const nome = 'Lorenzo'
    return function(){
        return nome;
    }
}
const funcao = retornaFuncao();
const nome = 'Mayke'
console.log(funcao())
console.dir(funcao())