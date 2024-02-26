const form = document.querySelector(".form") 
const result = document.querySelector(".resultado")

function evento (evento){
    evento.preventDefault();
    const num1 = document.querySelector('.num1').value;
    const num2 = document.querySelector('.num2').value;

    const greater = getGreater(num1,num2);
    const p = criaElemento(greater)
    mostraResultado(p,greater)
}
function getGreater(num1,num2){
    let resultado = 0
    if (num1 ===''|| num2===''){
         resultado= 'erro: Verifique os valores inseridos'
        }
    else if (num1 === num2 ) {
        resultado ='Os dois numero são iguais.'
    }
    else {
        resultado = Math.max(num1,num2)
    }
    return resultado;
}

function criaElemento(conteudo){
    const p = document.createElement('p')
    console.log(typeof conteudo)
   if(typeof conteudo === 'number') { 
    p.classList.add('paragrafo-resultado') }
   else if(typeof conteudo === 'string'){
    p.classList.add('bad')
   }
    p.innerHTML=conteudo
    return p;

}
function mostraResultado(p){
    const premove= result.querySelectorAll('p')
    console.log(premove)
    result.replaceChild(p,premove[0])

} 


form.addEventListener('submit', evento)

