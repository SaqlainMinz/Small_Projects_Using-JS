document.addEventListener('DOMContentLoaded',()=>{
    const todoInput= document.getElementById("todo-input")
    const addTaskBar=document.getElementById("add-task-button")
    const todoList=document.getElementById("todo-list")
    
    let task = JSON.parse(localStorage.getItem('tasks')) ||[];
    task.forEach((task)=>{
        renderTask(task)
    })
    
    addTaskBar.addEventListener('click',()=>{
        const taskText = todoInput.value.trim();
        if(taskText==="")return;
        const newTask ={
            id: Date.now(),
            text: taskText,
            completed: false,
        };
        task.push(newTask);
        saveTask();
        todoInput.value="";
        console.log(task);
        
    })
    function renderTask(tasks){
        console.log(task);
    }
    
    function saveTask(){
        localStorage.setItem('tasks',JSON.stringify(task));
    }
    
})