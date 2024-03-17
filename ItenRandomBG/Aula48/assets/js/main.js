// const itens = [
//     'Machado de Guerra','Machado de Guerra','Machado de Guerra'    ,'Espada Longa'    ,'Espada Longa'    ,'Espada Longa'    ,'Adaga do ritual'    ,'Adagadoritual'    ,'Adaga do ritual'    ,'Espada Grande'    ,'Espada Grande'    ,'Machado Grade'    ,'Machado Grade'    ,'Demon Slayer'    ,'Armadura de Couro'
//     ,'Armadura de Couro'    ,'Armadura de Couro'    ,'Escudo'    ,'Escudo'    ,'Escudo'    ,'Armadura de Talas'    ,'Armadura de Talas'    ,'Escudo de Corpo'
//     ,'Escudo de Corpo'    ,'Armadura da Fenix'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Manto de invisibilidade'
//     ,'Manto de invisibilidade'    ,'Manto de invisibilidade'    ,'Luva de Precisão'     ,'Luva de Precisão'    ,'item pica'    ,'Poção Basica'    ,'Poção Basica'
//     ,'Poção Basica'    ,'Poção Basica'    ,'Poção Basica'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'     ,'Poção Heroica'
//     ,'Poção Heroica'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas']

const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const taskList = document.querySelector('.list-task');
const itenRolado = document.querySelector('.item-rolado')
const listaItens=[ 
{nome:'Machado de guerra ', html:'<li class="1">1-Machado de guerra <button class="delete">APAGAR</button></li>'},
{nome:'Machado de guerra',html:'<li class="2">2-Machado de guerra <button class="delete">APAGAR</button><li>'},
{nome:'Machado de guerra',html:'<li class="3">3-Machado de guerra <button class="delete">APAGAR</button><li>'},
{nome:'Espada Longa',html:'<li class="4">4-Espada Longa<button class="delete">APAGAR</button><li>'},
{nome:'Espada Longa',html:'<li class="5">5-Espada Longa<button class="delete">APAGAR</button><li>'},
{nome:'Adaga do ritual',html:'<li class="6">6-Adaga do ritual <button class="delete">APAGAR</button>      <li>'},
{nome:'Adaga do ritual',html:'<li class="7">7-Adaga do ritual <button class="delete">APAGAR</button><li>'},
{nome:'Adaga do ritual',html:'<li class="8">8-Adaga do ritual <button class="delete">APAGAR</button><li>'},
{nome:'Espada Grande',html:'<li class="9">9-Espada Grande <button class="delete">APAGAR</button><li>'},
{nome:'Espada Grande',html:'<li class="10">10-Espada Grande <button class="delete">APAGAR</button><li>'},
{nome:'Machado Grande',html:'<li class="12">12-Machado Grande<button class="delete">APAGAR</button><li>'},
{nome:'Machado Grande',html:'<li class="13">13-Machado Grande<button class="delete">APAGAR</button><li>'},
{nome:'Demon Slayer',html:'<li class="14">14-Demon Slayer<button class="delete">APAGAR</button><li>'},
{nome:'Armadura de Couro',html:'<li class="15">15-Armadura de Couro<button class="delete">APAGAR</button><li>'},
{nome:'Armadura de Couro',html:'<li class="16">16-Armadura de Couro<button class="delete">APAGAR</button><li>'},
{nome:'Armadura de Couro',html:'<li class="17">17-Armadura de Couro<button class="delete">APAGAR</button><li>'},
{nome:'Escudo',html:'<li class="18">18-Escudo<button class="delete">APAGAR</button><li>'},
{nome:'Escudo',html:'<li class="19">19-Escudo<button class="delete">APAGAR</button><li>'},
{nome:'Escudo',html:'<li class="20">20-Escudo<button class="delete">APAGAR</button><li>'},
{nome:'Escudo de Corpo',html:'<li class="21">21-Escudo de Corpo<button class="delete">APAGAR</button><li>'},
{nome:'Escudo de Corpo',html:'<li class="22">22-Escudo de Corpo<button class="delete">APAGAR</button><li>'},
{nome:'Armadura de talas',html:'<li class="23">23-Armadura de talas<button class="delete">APAGAR</button><li>'},
{nome:'Armadura de talas',html:'<li class="24">24-Armadura de talas<button class="delete">APAGAR</button><li>'},
{nome:'Armadura da Fenix',html:'<li class="25">25-Armadura da Fenix<button class="delete">APAGAR</button><li>'},
{nome:'Botas de velocidade',html:'<li class="26">26-Botas de velocidade<button class="delete">APAGAR</button><li>'},
{nome:'Botas de velocidade',html:'<li class="27">27-Botas de velocidade<button class="delete">APAGAR</button><li>'},
{nome:'Botas de velocidade',html:'<li class="28">28-Botas de velocidade<button class="delete">APAGAR</button><li>'},
{nome:'Manto de invisibilidade',html:'<li class="29">29-Manto de invisibilidade<button class="delete">APAGAR</button><li>'},
{nome:'Manto de invisibilidade',html:'<li class="30">30-Manto de invisibilidade<button class="delete">APAGAR</button><li>'},
{nome:'Manto de invisibilidade',html:'<li class="31">31-Manto de invisibilidade<button class="delete">APAGAR</button><li>'},
{nome:'Luva de precisão',html:'<li class="32">32-Luva de precisão<button class="delete">APAGAR</button><li>'},
{nome:'Luva de precisão',html:'<li class="33">33-Luva de precisão<button class="delete">APAGAR</button><li>'},
{nome:'Areia do destino',html:'<li class="34">34-Areia do destino<button class="delete">APAGAR</button><li>'},
{nome:'Poção Basica',html:'<li class="35">35-Poção Basica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Basica',html:'<li class="36">36-Poção Basica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Basica',html:'<li class="37">37-Poção Basica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Basica',html:'<li class="38">38-Poção Basica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Basica',html:'<li class="39">39-Poção Basica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Avancada',html:'<li class="40">40-Poção Avancada<button class="delete">APAGAR</button><li>'},
{nome:'Poção Avancada',html:'<li class="41">41-Poção Avancada<button class="delete">APAGAR</button><li>'},
{nome:'Poção Avancada',html:'<li class="42">42-Poção Avancada<button class="delete">APAGAR</button><li>'},
{nome:'Poção Avancada',html:'<li class="43">43-Poção Avancada<button class="delete">APAGAR</button><li>'},
{nome:'Poção Heorica',html:'<li class="44">44-Poção Heorica<button class="delete">APAGAR</button><li>'},
{nome:'Poção Heorica',html:'<li class="45">45-Poção Heorica<button class="delete">APAGAR</button><li>'},
{nome:'BOMBA',html:'<li class="46">46-BOMBA!<button class="delete">APAGAR</button><li>'},
{nome:'BOMBA',html:'<li class="47">47-BOMBA!<button class="delete">APAGAR</button><li>'},
{nome:'BOMBA',html:'<li class="48">48-BOMBA!<button class="delete">APAGAR</button><li>'},
{nome:'BOMBA',html:'<li class="49">49-BOMBA!<button class="delete">APAGAR</button><li>'},
{nome:'BOMBA',html:'<li class="50">50-BOMBA!<button class="delete">APAGAR</button></li>'}
]
let item = 0

btnTask.addEventListener('click', function(e){

    e.preventDefault();
    taskList.innerHTML=''
    item = rand(1,listaItens.length)
    itenRolado.innerHTML=(`<h4 class="item-rolado">item Rolado: ${listaItens[item].nome}</h4>`)
    listaItens.splice(item,1)
    console.log(listaItens)
    listaritens(listaItens)

    

});
document. addEventListener('click', function(e){
    e.preventDefault();
    const click = e.target
    if (click.classList.contains('delete')){
        console.log(e)
        click.parentElement.remove();
        saveTask();
    }
})
function rand(min, max){
    const item = Math.floor(Math.random()* (max-min)+min);
    
   return item
}

function listaritens(listaDeItens){
    listaItens.map((val)=>{
    
            taskList.innerHTML+= val.html
    })}


function saveTask(){
    const liTask = taskList.querySelectorAll('li')
    const list = []

    for(let task of liTask){
        let textTask = task.innerText
        textTask = textTask.replace('APAGAR','').trim();
        list.push(textTask)
        
    }

    const taskJson =JSON.stringify(itens)
    console.log(taskJson)
    localStorage.setItem('tarefas', taskJson)
}
function reloadTask(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let [k, v] of Object.entries(listaDeTarefas || NaN )){
        console.log(k+'          '+v)
        createItemList(v)
    }
    }


reloadTask();

