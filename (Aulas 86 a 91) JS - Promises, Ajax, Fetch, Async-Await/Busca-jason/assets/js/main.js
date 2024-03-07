const formulario = document.querySelector('.formulario')
const IpNome = document.querySelector('.nome')
const IpIdade = document.querySelector('.idade')

   fetch('pessoas.json')
  .then (resposta => resposta.json())
  .then(json =>criaJson(json))
  
  

const clique = () => {
  document.addEventListener('submit', e =>{
      e.preventDefault();
      const el = e.target;
      ipNome = getNome();
      const obJson = buscar(aJson);
      console.log(obJson)
      carregaTela(obJson)

    })
}
function buscar (json){
  json.filter
}
function criaJson(json){
  const jsona = json
  console.log (json[1]+'  '+ jsona)
  return jsona;
}
function getNome(){
  const nome = IpNome.value
  console.log(nome)
  return nome;
}
clique();

function carregaTela(json){
  const table = document.createElement('table')
  // for (let pessoa of json){

    const tr = document.createElement('tr')
    let  td = document.createElement('td')
    td.innerHTML= json.nome
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerHTML= json.idade
    tr.appendChild(td)
    
    td = document.createElement('td')
    td.innerHTML= json.salario
    tr.appendChild(td)
    

    table.appendChild(tr)
// }
const resultado = document.querySelector('.resultado')
resultado.appendChild(table)
}


