//Escolo Lexico
const nome = 'Lorenzo'

function falaNome(){
    
    console.log(nome)// caso a função nao encontre a declaração ela vai procurar no blocos de codigos externos caso nao encontre continua indo para os niveis acima aquele o escopo global, caso nao encontre retorna o erro.
}

function chamaFalaNome(){
    const nome = 'Bonny'
    falaNome();
}
falaNome();
chamaFalaNome()