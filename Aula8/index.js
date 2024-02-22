/*
Lorenzo Lopes tem 25 anos e pesa 180 kg
tem 1.86 de aldura e seu imc é de ???
Luiz narceu em 1998
*/

const nome ='Lorenzo';
const sobrenome = 'Lopes';
const idade = 25;
const peso = 180;
const altura = 1.85;
let imc = peso/(altura*altura);
let anoAtual = 2024
let anoNascimento = anoAtual- idade;

console.log (nome,'nasceu em',anoNascimento,'e seu IMC é:',imc);

//Templete string
console.log(`${nome} nasceu em ${anoNascimento} e seu IMC é: ${imc}`);


