const currentDate = document.getElementById('date');
const tasksCount = document.getElementById('tasks');
const addedTask = document.getElementById('add-task');
const addButton = document.getElementById('add-btn');
const tasksList = document.getElementById('tasks-list');
const deleteButton = document.getElementById('delete-btn');




//date
var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
currentDate.innerHTML = day+"/"+month+"/"+year;

addButton.addEventListener('click',(e) => {
    e.preventDefault();
    if(addedTask.value !== ""){
        const task = addedTask.value;
        const list = document.createElement('li'); 
        list.innerHTML = `${task}`   
        tasksList.appendChild(list);

        addedTask.value = '';
        saveTasks();
    }
})

tasksList.addEventListener('click', (e) =>{
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTasks();
    }
})

deleteButton.addEventListener('click', () => {
    const checkedTasks = document.querySelectorAll('#tasks-list .checked');
    checkedTasks.forEach(task => {
        task.remove(); 
        saveTasks();
    });
});
function saveTasks(){
    localStorage.setItem('data', tasksList.innerHTML);
}

function showTask(){
    tasksList.innerHTML = localStorage.getItem('data');
}

showTask();