/*
function saudacao() {
 console.log('Olá, Mundo!')   
}
saudacao();
*/
function soma(x,y){
    const z= x+y
    return z;
}

//soma(2,5);
const resultadoSoma = soma(5,6);

console.log(`O resultado da soma é ${resultadoSoma}`)
console.log(`Outra forma de ver o resultado : ${soma(4,200)}`)

//Criando uma funação na atribuição de variavel.
 const raiz = function(x){
    return Math.sqrt(x);
 };

 console.log(`A raiz é: ${raiz(9)}`)

 // arrow function
 const raizarrow = n => Math.sqrt(n)

 console.log(raizarrow(16))