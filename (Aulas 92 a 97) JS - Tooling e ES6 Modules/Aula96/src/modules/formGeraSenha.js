import geraSenha from './geradores';
const gerada = document.querySelector(".senha-gerada")
const qtd = document.querySelector(".qtd-caracteres")
const maiusculas = document.querySelector(".chk-maiusculas")
const minusculas = document.querySelector(".chk-minusculas")
const num = document.querySelector(".chk-numeros")
const simbolos = document.querySelector(".chk-simbolos")
const btnGerar = document.querySelector(".gerar-senha")

export default function formGeraSenha(){
   btnGerar.addEventListener('click',()=>{
    
    gerada.innerHTML = gera();

   })

}

function gera (){
    const senhagerada = geraSenha(
      qtd.value,
      maiusculas.checked,
      minusculas.checked,
      num.checked,
      simbolos.checked
    )
    return senhagerada || 'Nada Selecionado.'
}
