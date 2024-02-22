function cadastraPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
};

const pessoa01 = cadastraPessoa('Lorenzo', 'Lopes', 25);
const pessoa02 =cadastraPessoa('Bonny', 'Husky', 2);
const pessoa03 =cadastraPessoa('André', 'Domingues', 26);

console.log(pessoa01.nome, pessoa02.sobrenome, pessoa03.sobrenome);