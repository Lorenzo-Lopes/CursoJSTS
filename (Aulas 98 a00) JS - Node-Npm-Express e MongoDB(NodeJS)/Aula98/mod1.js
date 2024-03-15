// const nome = 'lorenzo'
// const sobrenome = 'lopes'

// const falaNome = () => nome+' '+sobrenome


// exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;