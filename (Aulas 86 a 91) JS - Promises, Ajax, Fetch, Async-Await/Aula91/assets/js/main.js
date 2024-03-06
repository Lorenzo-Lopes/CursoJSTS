// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaTela(json));

axios('pessoas.json')
  .then (reposta => carregaTela(reposta.data))

  function carregaTela(json){
    const table = document.createElement('table')
    for (let pessoa of json){

      const tr = document.createElement('tr')
      let  td = document.createElement('td')
      td.innerHTML= pessoa.nome
      tr.appendChild(td)

      td = document.createElement('td')
      td.innerHTML= pessoa.idade
      tr.appendChild(td)
      
      td = document.createElement('td')
      td.innerHTML= pessoa.salario
      tr.appendChild(td)
      console.log(pessoa.nome)

      table.appendChild(tr)
  }
  const resultado = document.querySelector('.resultado')
  resultado.appendChild(table)
}