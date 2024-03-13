var itens = []

document.querySelector('input[type=submit]')
.addEventListener('click',() => {
    var nome = document.querySelector('.nome-produto')
    var preco = document.querySelector('.valor-produto')


    itens.push({
        nome:nome.value,
        preco:preco.value
    })

    const lista = document.querySelector('.lista-produtos')
    const totalhtml = document.querySelector('.soma-produto')
    let valorTotal=0
    lista.innerHTML=""
    itens.map(function(val){
        valorTotal +=  parseInt(val.preco)
        lista.innerHTML +=`
        <div class="lista-produto-single">
        <h3>${val.nome}</h3>
        <h3 class="preco"><span>R$${val.preco}</span></h3>
    </div>`
    totalhtml.innerHTML = `<h1> Total: R$${valorTotal}`
    })
    
    nome.value=''
    preco.value=''
    nome.focus()
})


