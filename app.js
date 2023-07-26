const todoForm = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo");

function handleSubmit(event){
  event.preventDefault();
}

todoForm.addEventListener("submit", handleSubmit);