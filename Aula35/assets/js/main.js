const elementos = [
    {tag: 'p', texto:'Paragrafo Criado'},
    {tag:'div', texto:'Div Criada'},
    {tag:'footer', texto:'Footer Criado'},
    {tag:'section', texto:'Section Criada'}
]

const div = document.querySelector('.ex')

function criaElemento (tagHtml , conteudo){
    const tag = document.createElement(tagHtml)
    tag.innerHTML = conteudo
    div.appendChild(tag)
}

 for (i = 0; i< elementos.length;i++){
        criaElemento(elementos[i].tag, elementos[i].texto)
}