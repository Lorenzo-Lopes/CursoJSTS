class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}` 
    }
    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome= valor.shift();
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Lorenzo','Lopes ')

console.log(p1.nomeCompleto)

const p2 = new Pessoa;


p2.nomeCompleto='André Viado Domingues'
console.log(p2.nomeCompleto)
console.log(p2.nome)
console.log(p2.sobrenome)
