//Deferenças entre tipos de variaveis LET E VAR 
//Let tem escobo de bloco --- EU NAO CONSIGO ACESSAR UMA VARIAVEL DO TIPO LET FORA DO BLOCO QUE ELA FOI DEFINIDO. -- > bloco = {...Bloco} 
// Let =  eu posso redefinir uma Variavel LET com mesmo nome dentro de um bloco
//Var tem escpo de funcao --- Se ela foi definida dentro de um bloco IF por ex eu consigo pegar o resultado dela de fora desse IF
const verdade = true;
let nome = 'lorenzo'
var nome2 = 'lopes'

if (verdade){
    let dentroBloco = 'var dentro do if'
     let nome = 'lolo'
    console.log(nome, nome2)
}

if(verdade){
    let nome = 'lolo segundo if'
    //console.log (dentroBloco)
}
console.log(dentroBloco);
console.log(nome, nome2)