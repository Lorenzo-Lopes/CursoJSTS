function meuEscopo() {
    const form = document.querySelector('.form');
    const lista = document.querySelector('.lista');
    const pessoasCadastradas=[]
    function cadastraPessoas(nome,sobrenome,peso, altura){
        
        pessoasCadastradas.push({
            nome:nome.value, 
            sobrenome:sobrenome.value,
            peso:peso.value,
             altura:altura.value})
             console.log(pessoasCadastradas)
    };

    function addLista(nome, sobrenome,peso,altura){
        lista.innerHTML += `Nome: ${nome.value} ${sobrenome.value}, Peso:${peso.value}, Altura: ${altura.value}<br>`
        

    }
    function evento (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        //cadastraPessoas(nome,sobrenome,peso,altura);
        addLista(nome,sobrenome,peso,altura);
        //console.log(`Chamado no evento ${pessoasCadastradas}`)

 
    };


    
    form.addEventListener('submit', evento)

};

meuEscopo();