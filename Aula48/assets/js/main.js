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

    const taskJson =JSON.stringify(list)
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



/**
 *  const tasks = localStorage.getItem('terefas');
    const taskList = JSON.parse(tasks);
    console.log(tasks+'            '+taskList)

    for(let task of taskList){
        createItemList(task);
    }
 * 
 */