
function relogio(){
  function criaSegundos(segundos){
    const data =new Date(segundos*1000)
    console.log(data)
    return data.toLocaleTimeString('pt-BR',{hour12:false, timeZone:'UTC'});
  }
  const relogio =document.querySelector('.relogio')
  let seg = 0
  let timer;

  function inicia(){
    timer= setInterval(function(){
      seg++
      relogio.innerHTML = criaSegundos(seg);
    },1000)
  }

  document.addEventListener('click',function(e){
    const evento = e.target;

    if (evento.classList.contains('zerar')){
      clearInterval(timer);
      relogio.innerHTML='00:00:00'
      relogio.classList.remove('pausado')
      seg=0
    }
    if (evento.classList.contains('iniciar')){
      relogio.classList.remove('pausado');
      clearInterval(timer);
      inicia();
    }
    if(evento.classList.contains('pause')){
      clearInterval(timer);
      relogio.classList.add('pausado')
    }
  });
}
relogio();










