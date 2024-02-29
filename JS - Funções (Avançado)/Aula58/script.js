// Função Construtora
// nome da função com letra maiuscula
// usar a para NEW para chamar
// Sempre retora um objeto
// Declarações com CONST dentro da função nao podem se utilizadas fora (mesmo que seja um metodo.)
//
let id= 0 
function Pessoa(nome, sobrenome){
    this.senha= Math.random();
    const criaId = ()=>  {
        
        id++;    
        return id
    }
    this.id= criaId();
    this.Pessoa = nome,
    this.sobrenome= sobrenome,
    this.fala= ()=>{
        console.log('Estou falando')
    }
}
const p1 = new Pessoa ('Lorenzo','Lopes')
const p2 = new Pessoa ('Luiz','Otavio')
p1.fala();
console.log(p1.id)
console.log(p2.senha)
const p3 = new Pessoa('Rapha','Santiago')
console.log(p3.id)