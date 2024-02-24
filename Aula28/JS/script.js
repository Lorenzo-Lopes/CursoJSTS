/*
const data = new Date(1708735433285) // 01/01/1970 Timestamp Unix ou Epoca unix valor da data é medido em MS des do dia 01/01/1970
const dataManual = new Date('1998-11-05 20:10:50')
console.log(data.toString());
console.log(dataManual.toDateString())

// como selecioar uma informação especifica da data.
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() +1);//mes 0-11 0 = janeiro --- 11 = Dezembro
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log(Date.now())
*/
function corrigeZero(num){
    return num>=10?num:`0${num}`
}

function formataData(data){
    console.log(data)
    const dia = corrigeZero(data.getDate())
    const mes = corrigeZero(data.getMonth()+1);
    const ano = corrigeZero(data.getFullYear());
    const hora= corrigeZero(data.getHours());
    const min = corrigeZero(data.getMinutes());
    const seg = corrigeZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date();
const dataformatar =formataData(data)
console.log(dataformatar)
