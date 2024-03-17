const itens = [
    'Machado de Guerra','Machado de Guerra','Machado de Guerra'    ,'Espada Longa'    ,'Espada Longa'    ,'Espada Longa'    ,'Adaga do ritual'    ,'Adagadoritual'    ,'Adaga do ritual'    ,'Espada Grande'    ,'Espada Grande'    ,'Machado Grade'    ,'Machado Grade'    ,'Demon Slayer'    ,'Armadura de Couro'
    ,'Armadura de Couro'    ,'Armadura de Couro'    ,'Escudo'    ,'Escudo'    ,'Escudo'    ,'Armadura de Talas'    ,'Armadura de Talas'    ,'Escudo de Corpo'
    ,'Escudo de Corpo'    ,'Armadura da Fenix'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Botas de Velociodade'    ,'Manto de invisibilidade'
    ,'Manto de invisibilidade'    ,'Manto de invisibilidade'    ,'Luva de Precisão'     ,'Luva de Precisão'    ,'item pica'    ,'Poção Basica'    ,'Poção Basica'
    ,'Poção Basica'    ,'Poção Basica'    ,'Poção Basica'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'    ,'Poção Avançada'     ,'Poção Heroica'
    ,'Poção Heroica'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas'    ,'Bombas']

const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const taskList = document.querySelector('.list-task');
inputTask.addEventListener('keypress', function(e){
    if(e.keyCode===13){
    if (!inputTask.value) return

    console.log(inputTask.value)
    createItemList(inputTask.value);
}});
btnTask.addEventListener('click', function(e){
    e.preventDefault();
    if (!inputTask.value) return

    console.log(inputTask.value)
    createItemList(inputTask.value);

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

function createItemList(inputValue){
    const li = createLi();
    li.innerText=inputValue;
    taskList.appendChild(li);
    clearInput();
    createBtnDelete(li);
    saveTask();


}
 function createLi(){
    const li = document.createElement('li')
    return li;
}
function clearInput(){
    inputTask.value=''
    inputTask.focus();
}
function createBtnDelete(li){
    li.innerText +=' '
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('delete');
    btnDelete.innerText=' APAGAR '
    li.appendChild(btnDelete);
}

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

