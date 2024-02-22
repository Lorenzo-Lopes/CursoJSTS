/*
Primitivos, String, number, Boolean, undefined, null, bigint, symbol --> são valores copiados.

Mutaveis > array, object, function. --> passa valores por referencia.
*/

let a = 1
let b = a 
a = a+10
console.log (`O valor de a é: ${a} e o valor de b é: ${b}`)

// exemplo com array e object

let array1 = ['lorenzo','André', 'Bonny']
let array2 = array1
console.log(array1, array2);
array1.pop()
console.log('removendo de uma array o resultado altera nas 2'+ array1, array2);

let ob1 = {
    nome:'Lorenzo',
    sobrenome: 'Lopes'     
}
let ob2 = ob1

console.log(ob1, ob2)

ob1.nome= 'luiz'
console.log(ob1, ob2)
ob2= {...ob1}
ob1.nome= 'jorge'
console.log(ob1, ob2)


array1.push(ob1)
console.log(array1.length)
