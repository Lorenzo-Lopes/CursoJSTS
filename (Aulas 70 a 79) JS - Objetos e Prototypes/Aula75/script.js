/*
const objA = {
    chaveA:'A'
}
const objB = {
    chaveB:'B'
}

const objC = {
    chaveC:'C'
}
Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)
console.log(objC.chaveA)
]
*/

function Produto (nome, preco){
    this.nome= nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(porcentagem){
     this.preco = this.preco - (this.preco*(porcentagem/100))
}
Produto.prototype.aumento = function(porcentagem){
     this.preco = this.preco + (this.preco * (porcentagem / 100))
}

const p1 = new Produto('CANECA',15)
const p2 = new Produto('GARFO',100)
Object.setPrototypeOf(p2,p1)
p2.desconto(50)
console.log(p2)
p2.aumento(400)
console.log(p2)