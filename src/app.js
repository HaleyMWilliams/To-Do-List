//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);

filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
event.preventDefault();
const todoDiv = document.createElement("div")
todoDiv.classList.add("todo")

// CREATE LI
const newTodo = document.createElement('li')
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//CHECK MARK BUTTON
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn")
todoDiv.appendChild(completedButton);

//CHECK TRASH BUTTON
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn")
todoDiv.appendChild(trashButton);

//APPEND TO LIST
todoList.appendChild(todoDiv);

//CLEAR TO DO INPUT VALUE

todoInput.value = "";

}

function deleteCheck(event) {
    const item = event.target;

// DELETE TODO
if (item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function() {
        todo.remove();
    })
}

//CHECK MARK 
if (item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle('completed');
}
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")) {
                        todo.style.display = 'flex'; 
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        });
    }







/*    function removeLocalTodos(todo) {
        let todos;

        if(localStorage.getItem('todos') === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        
        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
    } */
    