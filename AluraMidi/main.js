// Pom ----------------------------------------
function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let i =0;

while(i <listaDeTeclas.length){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
        
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    i++;
   
}

for(contador=0; contador<listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
        
    tecla.onclick(space) = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
        tecla.classList.remove('ativa');
    }
}
    