// FUNÇÃO RECURSIVA -> ELA DE CHAMA NO FINAL DO CODIGO E PARA QUANDO UMA CONDIÇÃO FOR SATISFEITA 


function recursiva (max){
    console.log(max)
    if(max>=12000) return
    max++
    recursiva(max)
}
recursiva(0)