const path = require('path');
const caminhoArquivo= path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escreve')
const ler  = require('./modules/ler')
// const pessoas = [
//     { nome:'Lorenzo'},
//     { nome:'Bonny'},
//     { nome:'Andre'},
//     { nome:'Nina'}
// ]

// const json = JSON.stringify(pessoas,'',2)

// escreve(caminhoArquivo,json)

async function lerAquivo(caminho){
    const dados = await ler(caminho)
    renderiza(dados)
}
function renderiza (dados){
    const objdados = JSON.parse(dados)
    objdados.forEach(objdados =>  console.log(objdados.nome))
}

lerAquivo(caminhoArquivo)