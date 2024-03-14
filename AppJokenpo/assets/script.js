var elementos = document.querySelectorAll('.player-options div > img');
const enemyOp = document.querySelectorAll('.enemy-options div')
const resultado = document.querySelector('.resultado')
var playerOpt = "";
function resetOpacity(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
        enemyOp[i].childNodes[0].style.opacity=0.3
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacity();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

       const inimigoOp=  inimigoJogar()
       verificaVencedor(playerOpt, inimigoOp)
    });
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)
   
    for (let i=0; enemyOp.length; i++){
        if (i===rand){
            enemyOp[i].childNodes[0].style.opacity=1
            return rand
        }
    }
}
function verificaVencedor(jogadorOP, inimigoOp){
    

        resultado.innerHTML='<h1> </h3>'
         console.log(jogadorOP, inimigoOp)
        if(jogadorOP === 'rock' && inimigoOp===0) resultado.innerHTML= '<h1 class="empate">EMPATE!</h1>'
        if(jogadorOP === 'paper' && inimigoOp===1) resultado.innerHTML= '<h1 class="empate">EMPATE!</h1>'
        if(jogadorOP === 'scisor' && inimigoOp===2) resultado.innerHTML= '<h1 class="empate">EMPATE!</h1>'
        if(jogadorOP === 'rock' && inimigoOp===1) resultado.innerHTML= '<h1 class="derrota">VOCE PERDEU!</h1>'
        if(jogadorOP === 'paper' && inimigoOp===2) resultado.innerHTML='<h1 class="derrota">VOCE PERDEU!</h1>'
        if(jogadorOP === 'scisor' && inimigoOp===0) resultado.innerHTML='<h1 class="derrota">VOCE PERDEU!</h1>'
        if(jogadorOP === 'rock' && inimigoOp===2) resultado.innerHTML='<h1 class="vencedor">VOCE VENCEU!</h1>'
        if(jogadorOP === 'paper' && inimigoOp===0) resultado.innerHTML='<h1 class="vencedor">VOCE VENCEU!</h1>'
        if(jogadorOP === 'scisor' && inimigoOp===1) resultado.innerHTML='<h1 class="vencedor">VOCE VENCEU!</h1>'
    




   

}

