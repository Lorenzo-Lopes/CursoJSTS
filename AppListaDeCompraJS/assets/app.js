const listaProdutos = document.querySelector('.lista-produtos')
const btnCadastra = document.querySelector('.btn-cadastra')
const nomeProduto = document.querySelector('.nome-produto')
const precoProduto = document.querySelector('.valor-produto')
const btnDel = document.querySelector('.del')
const somaProdutos = document.querySelector('.soma-produto')
var produto = []

btnCadastra.addEventListener('click', (e)=>{
    const el = e.target
    if (nomeProduto.value === ''|| precoProduto.value === ''){
        alert('Verifique: Nome ou valor nao preenchido.')
        return
    }
    pushProduto(nomeProduto.value, precoProduto.value)
    insereLista(produto)
    clear()
    nomeProduto.focus()


})
btnDel.addEventListener('click', (e)=>{
        const el = e.target
        if (el.classList.contains('delete')){
            produto = []
            somaProdutos.innerHTML = `<h1>Total: R$0</h1>`
            insereLista(produto)

        }
    
})

function pushProduto(nome,preco){
    produto.push({
        nome:nome,
        preco: Number(preco)
    })
}

function insereLista(produto){
    let totalItens= 0
    listaProdutos.innerHTML= ''
    produto.map(function(val){
        totalItens += val.preco
        listaProdutos.innerHTML += `
        <div class="lista-produto-single">
        <h3>${val.nome}</h3>
        <h3 class="preco"><span>R$${val.preco}</span></h3>
        </div>
        `
        somaProdutos.innerHTML = `<h1>Total: R$${totalItens}</h1>` 
        
    })
}
function clear(){
    nomeProduto.value=''
    precoProduto.value=''

}
