//--> Functions em JS são First-Class objects 
//(Hoisting: functions e var's são elevadas no momento da execução podendo serem chamadas antes da declaração.)
function comum(){
    console.log('FUNÇÃO CLASSICA- DECLARADA DA FORMA GENERICA.')
}

const dado = function(){
    console.log('FUNÇÃO DENTRO DE VARIAVEL.')
}
dado();

const arrow = () => {
    console.log('ARROW FUNCTION');
}
arrow();

function executaFunção(funcao){
    console.log('FUNÇÃO QUE EXE. FUNÇÃO, RECEME OUTRA FUÇÃO COMO PARAMETRO')
    dado();
}
executaFunção(dado);

