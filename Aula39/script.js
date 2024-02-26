// Laço while e do while
let i  = 0;

//while(i <=10){
//    console.log(i)
//    i++;
//}
//console.log('Saiu do laço')
//
// outro ex ...
function random (min,max){
    const n = Math.random()*(max-min)*min
    return Math.floor(n);
}
const min = 1
const max = 100
let rand =''
let contador= 0
//while(rand !== 10){ //repete essa condição enquando ela for verdadeira quando for FALSE ele Para
//
//    rand=random(min,max)
//    console.log(`Tentativas:${contador} radom:${rand}`)
//    contador++;
//} 

do{
    rand=random(min,max)
    console.log(`Tentativas:${contador} radom:${rand}`)
    contador++;
}while(rand!==10);