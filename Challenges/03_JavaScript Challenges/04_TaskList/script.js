const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function updateTaskStats() {
  const allTasks = document.querySelectorAll(".task-item");
  const completedCount = document.querySelectorAll(".task-item.completed").length;
  
  totalTasks.textContent = `Total tasks: ${allTasks.length}`;
  completedTasks.textContent = `Completed: ${completedCount}`;

  // Show empty message if no tasks exist
  if (allTasks.length === 0) {
    taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`;
  }
}

function createTask(taskText) {
  if (!taskText.trim()) return; // Prevent adding empty tasks

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("complete-checkbox");

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Mark task as completed
  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
    updateTaskStats();
  });

  // Delete task
  deleteButton.addEventListener("click", () => {
    taskItem.remove();
    updateTaskStats();
  });

  // Append elements to the task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);

  // Remove empty list message if present
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) emptyMessage.remove();

  // Add task to the list
  taskList.appendChild(taskItem);
  updateTaskStats();
}

// Add task on button click
addButton.addEventListener("click", () => {
  createTask(taskInput.value);
  taskInput.value = ""; // Clear input field after adding
});

// Add task on pressing Enter
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    createTask(taskInput.value);
    taskInput.value = "";
  }
});

// Initialize task stats on load
updateTaskStats();
