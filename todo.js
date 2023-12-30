const todoList = [];

function addTodo() {
  let inputElement = document.querySelector(".inputfield");
  let inputValue = inputElement.value;

  todoList.push(inputValue);
  console.log(todoList);

  inputElement.value = "";

  renderTodos();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  let todoHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    todoHTML += `
      <div class="todo-item">
        ${todoList[i]}
        <button onclick="deleteTodo(${i})" class="delete-button">
          Delete
        </button>
      </div>
    `;
  }

  document.querySelector(".div-todo").innerHTML = todoHTML;
}
