const input = document.querySelector('[data-form-input]')
const criarTarefa = (evento)=>{
    evento.preventDefault()
    const valor = input.value
    criaElemento()

}
function criaElemento(){
    const li = document.createElement('li')
    const lista = document.querySelector('.list')
    const p =document.createElement('p')
    p.classList.add('content')
    li.appendChild(p)
    p.innerText= input.value
    li.classList.add("task")
    lista.appendChild(li)
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click',criarTarefa)