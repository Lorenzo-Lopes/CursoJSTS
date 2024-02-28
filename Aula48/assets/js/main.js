const form = document.querySelector('.input-form')
const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')

console.log(inputTask)
/* 
1 - criar um item da lista (criar item e fazer apennd no ul)
2 - fazer o botão "Aicionar nova tarefa" funcionar
3 - adicioar o conteudo do input ao item da lista
4 - adicionar um botão que remove itens da lista
5 - fazer o botar de remover item funcionar 
*/
//let task = null
document.addEventListener('click', function (e){
    e.preventDefault(); 
    const click = e.target
    console.log(click)
    
    if(click.classList.contains('btn-task') ){
        
        const inputTask = document.querySelector('.input-task').value;
        let task = inputTask;
        //console.log(task);
        const list = createTaskItemList();
        const htmlTask = getTask(task, list)
        const deleteButton = creatBtn();
        appendTask(htmlTask, deleteButton)
        index++
    }
     if(click.classList.contains('btn-remove')){
        const listaToRemove= createListToDelete();
        removeTask(click.classList[1].value,listaToRemove);
    }
});

let index= 0
function createListToDelete(){
    const taskList = document.getElementsByTagName(`li`)
    console.log(taskList);
    return taskList;
}
function removeTask(index,listaToRemove){
    
    const taskList = document.getElementsByTagName(`li`)
    const itasktoremove = document.getElementsByClassName(`remove ${index}`)
    console.log(taskList)
    document.getElementsByClassName('list-task').removeChild(document.getElementsByClassName(`remove ${index}`))
    //(tasktoremove.className.contains(`remove ${index}`))
   
}

function creatBtn(){
    const btn = document.createElement('button')
    btn.classList.add('btn-remove',index)
    btn.innerHTML= 'apagar'
    return btn;
}

function createTaskItemList(){// cria a tag que vai receber a task
    const list = document.createElement('li')
    
    list.classList.add('remove',`${index}`)
    return list;
}
function getTask(task, list){//receber a tag vazia e valor digita para retornar a tag a ser add na lista
    const tarefa= task
    const htmlTask = list
    htmlTask.innerHTML= tarefa
    htmlTask.classList.add('task')
    return htmlTask;
    
}
function appendTask(htmlTask,deleteButton){//add a tag da task ao html.
    const listTask = document.querySelector('.list-task')
    //listTask.innerHTML +=''
    const item = htmlTask;
    const delBtn = deleteButton; 
    listTask.appendChild(item);
    item.appendChild(delBtn)
}

