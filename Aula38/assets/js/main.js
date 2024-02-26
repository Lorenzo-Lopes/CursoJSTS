const texto = document.querySelector('.texto')
const paragrafos = texto.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const corDeFundo = estilosBody.backgroundColor


for (let i in paragrafos){
    paragrafos[i].style.backgroundColor=corDeFundo;
    paragrafos[i].style.color="white";
}



