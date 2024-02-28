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

function corrigeDia(data){
    let dia = data
    console.log(data)
    switch(dia){
        case  0 :
        dia = 'Domingo'
        break;
        case 1:
            dia ='Segunda-Feira'
            break;
        case 2:
            dia ='Terça-Feira'
            break;
        case 3:
            dia ='Quarta-Feira'
            break;
        case 4:
            dia ='Quint-Feira'
            break;
        case 5:
            dia ='Sexta-Feira'
            break;        
        case 6:
            dia = 'Sabado'   
            break;
        default:
            dia ='Data invalida'
    }
    return dia;
  }
  function corrigeMes(data){
    let mes = data
    console.log(data)
    switch(mes){
        case  0 :
        mes = 'Janeiro'
        break;
        case 1:
            mes ='Fevereiro'
            break;
        case 2:
            mes ='Março'
            break;
        case 3:
            mes ='Abril'
            break;
        case 4:
            mes ='Maio'
            break;
        case 5:
            mes ='Junho'
            break;        
        case 6:
            mes = 'Julho'   
            break;
        case 7:
            mes = 'Agosto'   
            break;
        case 8:
            mes = 'Setembro'   
            break;
        case 9:
            mes = 'Outubro'   
            break;
        case 10:
            mes = 'Novembro'   
            break;
        case 11:
            mes = 'Dezembro'   
            break;
        default:
            dia ='Data invalida'
    }
    return mes;

  }

function formataData(data){
    const diaExtenso = corrigeDia(data.getDay());
    const mesExtenso = corrigeMes(data.getMonth());
    const dia = corrigeData(data.getDate());
    //const mes = corrigeData(data.getMounth());
    const ano = corrigeData(data.getFullYear());
    const hora= corrigeData(data.getHours());
    const min = corrigeData(data.getMinutes());
    const seg = corrigeData(data.getSeconds());

    
    return `${diaExtenso}, ${dia} de ${mesExtenso} de ${ano} ${hora}:${min}:${seg}`
}

window.setTimeout( function() {
    window.location.reload();
  }, 1000);