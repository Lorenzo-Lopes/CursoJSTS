const p1 = {
    nome:'Caneca',
    preco: 25.00
}
console.log(p1)

//Object.assign({}) --  faz a criação de um novo objeto com base em um ja existente.

const p2 =Object.assign({},p1,{materia:'Argila'})
p2.nome = 'Jarro'
p2.preco= 80
console.log (p2)


console.log(Object.keys(p2))
Object.freeze(p2)// Torna o objeto imutavel

console.log(Object.getOwnPropertyDescriptor(p2,'nome',{
    writable: false
}))

console.log(Object.entries(p2))// retorna um array para cada chave do objeto contendo o nome da chabe e o valor dela
