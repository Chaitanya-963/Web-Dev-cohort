let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addButton");
let taskList = document.querySelector("#taskList");
let emptyList = document.querySelector(".empty-list");
let totalTasks = document.querySelector("#totalTasks");
let completedTasks = document.querySelector("#completedTasks");


function updateStats() {
  const task = document.querySelectorAll("#taskList li");
  const complete = document.querySelectorAll("#taskList .task-item.completed");
  totalTasks.innerHTML = `Total Tasks: ${task.length}`;
  completedTasks.innerHTML = `Completed Tasks: ${complete.length}`;
  emptyList.style.display = task.length === 0 ? "block" : "none";
}

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "complete-checkbox";
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTask();
    updateStats();
  });

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = input.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-button";
  delBtn.addEventListener("click", function () {
    saveTask();
    taskList.removeChild(li);
    updateStats();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
  updateStats();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

updateStats();
