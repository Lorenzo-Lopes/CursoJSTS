function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //his.nomeCompleto= ()=> this.nome +' '+this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const p1 = new Pessoa('lorenzo','lopes')
const p2 = new Pessoa('Bonny','husky')
console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())