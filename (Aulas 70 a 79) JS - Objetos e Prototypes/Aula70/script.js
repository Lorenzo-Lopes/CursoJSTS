/*
const p1 = {
    nome: 'Lorenzo',
    sobrenome:'Lopes',
//Objetos podem ter funções.
    falaNome: ()=>{
    return`Meu nome é  ${this.nome}`
},
idade:25 ,
getDataNasc:()=>{
    const hj = new Date();
    return hj.getFullYear()- p1.idade
}

}
console.log(p1.getDataNasc())

// const chave= 'nome'
 //console.log(p1.nome)
 //console.log(p1['nome'])
 //console.log(p1[chave])
const p2 = new Object();//
p2.nome = 'Bonny'       // OUTRA FORMA DE DEFINIR UM OBJT
p2.sobrenome = 'Lopes'  //
p2.falaNome  = function(){
    return`Meu nome é  ${this.nome}`
}
p2.idade = 2
p2.getDataNasc = function(){
    const hj = new Date();
    return hj.getFullYear() - this.idade
}


console.log(p2.getDataNasc())
console.log(p1.getDataNasc())
console.log(p2.idade)

for(let chave in p1)
console.log(p1[chave])
*/

/*
// factory function 

function criaPessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
 }
 const p1 = criaPessoa('Lorenzo','Lopes');
 console.log(p1.nomeCompleto)
 */

 function Pessoa(nome,sobrenome){
    this.nome= nome
    this.sobrenome = sobrenome
    Object.freeze(this)//Object.freeze bloqueia toda e qualquer alteração dos valores e atributos desse objeto.
 }
 const p1 = new Pessoa('Lorenzo','Lopes')
 p1.nome='jabirosca'
 console.log(p1)