/* Escreva uma função que recebe um numero e retorne o seguinte:
Numero divisivel por 3 = Fizz
Numero divisivel por 5 = Buzz
Numero divisivel por 3 e 5 = FizzBuzz
Checar se o numero é realmente um numero = Retorna o próprio numero.
Use uma funcao com numero de 0 a 100.
*/

function checaDiv(numero){
    let resultado = 0

    if(numero % 3 === 0 && numero % 5 ===0) resultado = 'FizzBuzz';
    else if (numero % 3 === 0 ) resultado ='Fizz'
    else if(numero % 5 ===0) resultado= 'Buzz'
    else if(numero % 3 !== 0 && numero % 5 !==0)  resultado =numero
    return resultado
}
for (let i = 0; i<=100; i++){
    
    console.log(`Numero:${i} =>${checaDiv(i)}`)

}