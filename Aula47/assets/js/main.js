function relogio(){
    function criaSegundos(seg){
        let data = new Date(seg*1000);
        console.log(data)
        return data.toLocaleTimeString('pt-br',{hour12:false, timeZone:'UTC'})
    };

    const relogio = document.querySelector('.relogio')
    let seg =0;
    let timer;
    function iniciaRelogio(){
        timer= setInterval(function(){
            seg++
            relogio.innerHTML=criaSegundos(seg)
        },1000);
    };

    document.addEventListener('click',function(e){
        const clique = e.target;
        console.log(clique)
        
        if(clique.classList.contains('zerar')){
            clearInterval(timer)
            relogio.innerHTML ='00:00:00'
            seg = 0
            relogio.classList.remove('pausado')
        }
        if(clique.classList.contains('iniciar')){
            iniciaRelogio();
            relogio.classList.remove('pausado')
        }
        if(clique.classList.contains('pause')){
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
    })
};
  relogio();