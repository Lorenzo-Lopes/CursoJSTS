//defineProperty -> Getter e Setter
function Produto(nome, preco,estoque){
    this.nome;
    this.preco;

    let estoqueP = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:false,// permite que o propriedade 'estoque' seja exibida
        configurable: true,// os parametros acima pode ser redefinidos em outro bloco de codigo ### Se falso tambem bloqueia a exclução da propriedade
        get: function(){
            return estoqueP
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Ta errado')
            }
            estoqueP = valor
        }
    });
    }

const p1 = new Produto('Camiseta',20,3)
p1.estoque = 555
console.log(p1)

function criaProduto (nome){
    return{
        get nome(){
            return nome;
        },
        set nome (valor){
            nome= valor 
        }
    }
}
const p2 = criaProduto('notebook');

console.log (p2.nome)
p2.nome='Joao'
console.log (p2.nome)

const p3 = Object.assign({},p1)
console.log(p3.nome)