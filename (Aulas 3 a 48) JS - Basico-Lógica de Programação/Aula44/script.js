// Try, catch  e Throw ==> TRATAMENTO DE ERROS.
function soma (x,y){
    if(typeof x !=='number' || typeof y !== 'number') {
        throw new Error('X ou Y nao são numero, Verifique')
    }
    return x+y;
    
}

    try{
    console.log(soma(5,'2'));
}catch(e){
    console.log(e)
}

