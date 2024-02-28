const frutas = ['laranja', 'maça', 'uva', 'pera', 'mamao']
// Exempro de uso do FOR IN 

for(let i in frutas){
    console.log(frutas[i])
}

// correndo um objeto com FOR IN
console.log('-----------------------------------------')
const cadastro = {
    nome:'Lorenzo',
    sobrenome:'Lopes',
    idade:25,
    peso:180
}
for (let x in cadastro){
    console.log(x, cadastro[x])
}