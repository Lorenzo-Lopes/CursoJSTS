/*
Ordem de precedencia dos oporadores.
() operações dentro do parenteses 
** - potencialização
* ou /  - multiplicação ou divisão
+ ou -  - Soma ou Subtração
*/
let n1 = 9;
let n2 = 3;
let soma = n1+n2;
let sub = n1-n2;
let div = n1/n2;
let mult = n1*n2;

console.log('A soma de',n1,'e',n2,'é:',soma);
console.log('A sub de',n1,'e',n2,'é:',sub);
console.log('A div de',n1,'e',n2,'é:',div);
console.log('A mult de',n1,'e',n2,'é:',mult);

// incremento de 1 em 1
console.log("Ex de incremento em um contador")
let incremento = 1;
incremento++;

console.log(incremento++);
++incremento;
console.log(++incremento);


//Decremento de 1 em 1
console.log("Ex de decremento em um contador")
let decremento=10;
decremento--;
console.log(--decremento);
console.log(decremento--);

//Incremente ou decremente com valor de 2 ou mais.

/*
--- ESSA FORMA TAMBEM FUNCIONA COM OUTROS OPERADORES (MULTIPLICAÇÃO/DIVISÃO/POTENCIALIZAÇÃO)
*/ 
console.log('Ex de contadores com valor de 2 ou mais.')
const metrica=5;
let contador =0;
console.log(`O contadotador esta iciando com ${contador}`)
contador+=metrica
console.log(`Apos um incremento no contador o valor atual é de:${contador}`);
contador-=metrica;
console.log(`Apos um decremente no contador o valor atual é de:${contador}`);


// Ex de concatenação
const numero = 123;
const frase = "321";
console.log('esse é uma ex de concatenação');
console.log(numero+frase);

//Ex de concatenação  com uso de parseInt + ParseFloat

console.log(`Esse é um exemplo do uso da concatenação com uso do parseinte ${numero+parseInt(frase)}`);

const numerofloat = '10.4';
console.log(numero+parseFloat(numerofloat));
console.log(parseFloat(numerofloat)+parseInt(frase)+'Resultado somando com parsefloat + parseInt');


console.log(Number(frase)+Number(numerofloat)+ 'Resutaldo somando as duas variaveis utilizando o Number');



