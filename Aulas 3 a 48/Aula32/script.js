//Aula sobre DESESTRUTURAÇÃO DE ARRAYS 
//EX
/*
let a = 'a';
let b = 'b';
let c = 'c';
console.log(`valores definidos: ${a},${b},${c}`);

[a, b, c] = ['b','c','a'];

console.log(`valores após desestruturação: ${a},${b},${c}`)

const letras = ['AA','BB','CC'];

[a,b,c]= letras;
console.log(`valores após desestruturação com outra array : ${a},${b},${c}`);

*/


//Exemplificação do uso da função ... (...) rest ou spread
const numeros = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const [n1, ,n3, , n5, ,n7, ...sobra] = numeros

console.log(n1, n3,n5, n7)
console.log(sobra)

// pegando o valor dentro de uma lista de arrays utilizando a desestruturalçao.

const nums = [[1,2,3],[4,5,6],[7,8,9]];
const[,[,,seis],[,oitro,... sobra2]]= nums;//mto complexto 
console.log(seis,oitro,sobra2)


const [lista1,lista2,lista3]=nums
console.log(lista3[1])
