//Aula 29 -- Swtich Case

const data =  new Date('2024/02/20');
const diaSemana = data.getDay();



function defineDia(diaSemana){
    let diaSemanatexto= diaSemana
switch (diaSemana){
    case  0 :
        diaSemanatexto = 'Domingo'
        break;
    case 1:
        diaSemanatexto ='Segunda'
        break;
    case 2:
        diaSemanatexto ='Terça'
        break;
    case 3:
        diaSemanatexto ='Quarta'
        break;
    case 4:
        diaSemanatexto ='Quinta'
        break;
    case 5:
        diaSemanatexto ='Sexta'
        break;        
    case 6:
        diaSemanatexto ='Sabado'   
        break;
    default:
        diaSemanatexto ='data invalida'
}
return diaSemanatexto
}
const diaTexto = defineDia(diaSemana);
console.log(diaTexto);

