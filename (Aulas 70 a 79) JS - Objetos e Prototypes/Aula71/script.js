function Produto(nome, preco,estoque){
    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value : preco,
            writable:false, 
            configurable: true,
        },
        preco:{
            enumerable:true,
            value : preco,
            writable:false, 
            configurable: true,

        }
    })
    Object.defineProperty(this,'estoque',{
        enumerable:true,// permite que o propriedade 'estoque' seja exibida
        value : estoque,// define valor
        writable:false,// valor pode ou  nao ser alterado
        configurable: true,// os parametros acima pode ser redefinidos em outro bloco de codigo

    }),
    Object.defineProperty(this,'estoque',{
        enumerable:false,// permite que o propriedade 'estoque' seja exibida
        value : estoque,// define valor
        writable:true,// valor pode ou  nao ser alterado
        configurable: false,// os parametros acima pode ser redefinidos em outro bloco de codigo ### Se falso tambem bloqueia a exclução da propriedade

    })


    }

const p1 = new Produto('Camiseta',20,3)
p1.estoque=10000
console.log(Object.keys(p1))// retorna as chaves do objeto
console.log(p1)
