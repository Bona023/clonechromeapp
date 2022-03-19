const toDoForm = document.querySelector(".todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.addEventListener("change", () => {
        if (check.checked) {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "";
        }
    });
    const span = document.createElement("span");
    const xButton = document.createElement("button");
    xButton.classList.add("fa-solid", "fa-xmark");
    xButton.addEventListener("click", deleteToDo);
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(xButton);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}
