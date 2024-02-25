const pessoa = {
    nome:'Lorenzo',
    sobrenome:'Lopes',
    idade :25,
    endereco:{
        rua:'av. Piracicamirim',
        numero: 3039
    }
};

// Ex de atribuição por desestruturação vvv
const {nome='',... resto} = pessoa;

console.log(nome,resto);