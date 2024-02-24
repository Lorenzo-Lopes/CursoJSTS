//Relogio atualiando na tela
const data = consultaData();
const dataFormatada = formataData(data);

mostraData(dataFormatada);

console.log(dataFormatada)
function mostraData(dataFormatada){
    const dataFormatad = dataFormatada;
    const resultado = document.querySelector('.container')
    const tag = criaTag();
    tag.classList.add('container')
    tag.innerHTML =dataFormatad
    resultado.appendChild(tag)
    console.log('passou aqui')
    
   

}
function criaTag(){
    const tagCriada = document.createElement('h1')
    
    return tagCriada
}
function consultaData(){
    const data = new Date();
    return data;
}
function corrigeData(numero){
    let num = numero
    num = (num < 10)?`0${num}`: num
    return num;
}
function formataData(data){
    const dia = corrigeData(data.getDate());
    const mes = corrigeData(data.getMonth()+1);
    const ano = corrigeData(data.getFullYear());
    const hora= corrigeData(data.getHours());
    const min = corrigeData(data.getMinutes());
    const seg = corrigeData(data.getSeconds());

    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
window.setTimeout( function() {
    window.location.reload();
  }, 1000);