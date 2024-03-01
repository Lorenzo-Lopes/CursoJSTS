const numeros = [1,2,3,4,5,6,7,8,9]

for (let i of numeros){
    
    if (i=== 2 ){
        console.log('Pulei o 2');
        continue;// faz com que o bloquo de codigo comece novamente
    }
    if( i ===7){
        console.log('Saindo..');
        break;// Interrompe o loop e faz sair do bloco de codigo atual...
    }
    console.log(i)
}