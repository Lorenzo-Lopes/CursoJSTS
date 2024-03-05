// PRODUTOD DE UM ECOOMERCE
// Camiseta= cor , Caneca = material, caneta = cor


function Produto (nome, preco){
    this.nome= nome;
    this.preco = preco;
};
//##########################
Produto.prototype.desconto = function(porcentagem){
     this.preco = this.preco - (this.preco*(porcentagem/100))
};
//##########################
Produto.prototype.aumento = function(porcentagem){
     this.preco = this.preco + (this.preco * (porcentagem / 100))
};
const produto1 = new Produto('generico',100)
function Camiseta (nome,preco, cor){
    Produto.call(this, nome, preco)
   this.cor= cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento=function(valor){
    this.preco+= valor

}
const camiseta1 = new Camiseta('regata',25,'preta')


function Caneca(nome, preco, material,estoque){
    Produto.call(this , nome, preco)
    this.material= material,

    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set:function(valor){
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
const caneca1 = new Caneca('Canceca nerd', 25, 'porcelanato',5)

console.log(camiseta1)
console.log(caneca1)
console.log(produto1)