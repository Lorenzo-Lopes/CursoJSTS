function mostraHora (){
    let data= new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
},9000)

//setTimeout(function(){
//    console.log('Ja acabou, pode ir embora.')
//},10000)

//cronometo.toLocaleTimeString('pt-BR',{  hour12: false});