const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", loadTasks);

// adding submit
todoform.addEventListener("submit", addtask);

function addtask(Event) {
  Event.preventDefault();

  const tasktest = todoinput.value.trim();
  if (tasktest !== "") {
    const task = {
      id: Date.now(),
      text: tasktest,
      completed: false,
    };
    addingDomtask(task);
    loadLocalStorage(task);
  }

  todoinput.value = "";
}

function loadTasks() {
  // getting localstorage
  const tasts = getLocalTasks();
  tasts.forEach((task) => {
    addingDomtask(task);
  });
}

function addingDomtask(task) {
  const li = document.createElement("li");

  li.classList = `todo-item ${task.complated ? "complate" : ""}`;
  li.dataset.id = task.id;

  li.innerHTML = `  <input type="checkbox">
        <span class="task">${task.text}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">delete</button>`;

  todolist.appendChild(li);

  attachedEventListeners(li, task);
}

function attachedEventListeners(li, task) {
  // deletebtn
  const deletebtn = li.querySelector(".delete-btn");
  deletebtn.addEventListener("click", function () {
    handleDelete(li, task.id);
  });

  // editbtn
  const editbtn = li.querySelector(".edit-btn");
  editbtn.addEventListener("click", function () {
    handEdit(li, task.id);
  });
}

function handEdit(li, taskID) {
  const spanText = li.querySelector(".task");
  // console.log(spanText);
  // console.log(spanText.textContent);
  const ChangeNewText = prompt("Update the text", spanText.textContent);

  if (ChangeNewText !== null && ChangeNewText.trim() !== "") {
// update the localstroge
    updatetask(taskID, ChangeNewText);
// Update the Dom
    spanText.textContent = ChangeNewText;
  }
}

function updatetask(id, ChangeNewText) {
  let tasks = getLocalTasks();
  tasks = tasks.find((task) => task.id === id);
  if (tasks) {
    tasks.text = ChangeNewText;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function handleDelete(li, id) {
  let tasks = getLocalTasks();

  tasks = tasks.filter((task) => task.id != id);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  li.remove();
}
function loadLocalStorage(task) {
  // kow waxaan soo galiyey local stroage xogta aniguu istimaal aya setItem kadib waxaan ku raadiyey getItem sidaan u helo sida loo helo xogtii hore push ayaan
  
  // hubin xogta
  const oldtask = getLocalTasks();
  oldtask.push(task);
  localStorage.setItem("tasks", JSON.stringify(oldtask));
}

function getLocalTasks() {
  const oltask = JSON.parse(localStorage.getItem("tasks")) || [];
  return oltask;
}
