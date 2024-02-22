const numero = Number(prompt('Digite um numero:'));
const numerot = document.getElementById('numerot');
const raizQ = document.getElementById('raizQ');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan')
const ceil  = document.getElementById('ceil');
const floor = document.getElementById('floor')
const decimal = document.getElementById('decimal')

numerot.innerHTML += numero
raizQ.innerHTML+= Math.sqrt(numero);
inteiro.innerHTML += Number.isInteger(numero);
nan.innerHTML += Number.isNaN(numero);
ceil.innerHTML += Math.ceil(numero);
floor.innerHTML += Math.floor(numero);
decimal.innerHTML += numero.toFixed(2)


