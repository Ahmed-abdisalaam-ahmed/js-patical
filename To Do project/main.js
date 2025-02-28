const todoform = document.querySelector('#todo-form');
const todoinput = document.querySelector('#todo-input');
const todolist = document.querySelector('#todo-list');


// adding submit

todoform.addEventListener('submit', addtask);

function addtask(Event){
    Event.preventDefault()

    console.log('hello wordls')
}