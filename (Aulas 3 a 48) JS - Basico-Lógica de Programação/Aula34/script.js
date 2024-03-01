// Laço FOR
/*
for (let i = 0; i <= 10; i++){
    
let par = (i%2 ===0) ?  "PAR":'IMPAR'
    console.log (`${i} é ${par}`)
} 
*/
const listaDeCompra = ['Chocolate','Creme de leite','manteiga','requeijão','cebola'];

for(let i= 0; i< listaDeCompra.length ;i++){
    console.log(`${i+1} - ${listaDeCompra[i]}`)
}
