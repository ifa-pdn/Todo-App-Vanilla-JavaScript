// STATE
let todos = [];
let currentFilter = "all";

// DOM
const ul = document.querySelector(".todolist");
const filter = document.querySelector("#filter");
const todoText = document.querySelector(".add-task__text");
const submitBtn = document.querySelector(".add-task__save");
const addTaskBtn = document.querySelector(".todo-app__add");
const cancelTaskBtn = document.querySelector(".add-task__cancel");
const addTaskForm = document.querySelector(".add-task");
const dateWrapper = document.querySelector(".header__date");
const timeWrapper = document.querySelector(".header__time");

// Load todos from localStorage
const loadTodos = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  }
};

// Filter Todos
const saveFilter = () => localStorage.setItem("filter", currentFilter);

const loadFilter = () => {
  const savedFilter = localStorage.getItem("filter");
  if (savedFilter) {
    currentFilter = savedFilter;
    filter.value = savedFilter;
  }
};

const todosFilter = (print) => {
  if (print === "active") {
    return todos.filter((todo) => !todo.done);
  } else if (print === "done") {
    return todos.filter((todo) => todo.done);
  } else {
    return todos;
  }
};

const render = () => {
  const filteredTodos = todosFilter(currentFilter);
  renderTodos(filteredTodos);
};

// Render(display) todo in HTML
const renderTodos = (list = todos) => {
  ul.innerHTML = list
    .map(
      (todo) =>
        `
		<li class ="todolist__item ${todo.done ? "completed" : ""}" data-id="${todo.id}" draggable="true">
	<label class="todo">
	<input type="checkbox" class="todo__status" ${todo.done ? "checked" : ""}/>
	<span class="todo__text">${todo.text}</span>
	</label>
	<div class="todo__actions">
	<button class="todo__edit"><i class="fa-solid fa-pen-to-square todo__edit"></i></span></button>
	<button class="todo__delete"><i class="fa-solid fa-trash-can todo__delete"></i></span></button>
	</div>
	</li>
	`,
    )
    .join("");
};

// Add, Edit, Save todo to localStorage
let editTodoId = null;

const startEditTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;

  todoText.value = todo.text;
  editTodoId = id;

  submitBtn.textContent = "Update";
};

const addTodo = () => {
  if (editTodoId === null) {
    // Add todo Mode
    const todo = {
      id: crypto.randomUUID(),
      text: todoText.value,
      done: false,
    };

    todos.push(todo);
  } else {
    // Edit todo Mode
    todos = todos.map((todo) =>
      todo.id === editTodoId ? { ...todo, text: todoText.value } : todo,
    );

    editTodoId = null;
    submitBtn.textContent = "+ Save Task";
  }

  saveTodos();
  render();
  todoText.value = "";
};

// Save todos in localStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Done toggle function
function toggleTodo(checkbox) {
  const li = checkbox.closest(".todolist__item");
  const id = li.dataset.id;

  const todo = todos.find((todo) => todo.id === id);
  if (!todo) return;

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: checkbox.checked } : todo,
  );

  reorderTodos();
  saveTodos();
  render();
}

// Remove todo function
const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  render();
};

// Reorder todo function
const reorderTodos = () => {
  const active = todos.filter((todo) => !todo.done);
  const done = todos.filter((todo) => todo.done);

  todos = [...active, ...done];
};

// __________________

loadTodos();
loadFilter();
render();

// Sortable JS
new window.Sortable(ul, {
  animation: 180,
  delay: 150,
  delayOnTouchOnly: true,

  touchStartThreshold: 5,
  ghostClass: "drag-ghost",
  chosenClass: "drag-chosen",
  dragClass: "drag-dragging",

  onEnd() {
    const newOrder = [...ul.children].map((li) => li.dataset.id);
    todos = newOrder.map((id) => todos.find((todo) => todo.id === id));
    saveTodos();
  },
});

// Create new task
addTaskBtn.addEventListener("click", () => {
  addTaskBtn.classList.toggle("active");
  addTaskForm.classList.toggle("active");
});

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTaskBtn.classList.toggle("active");
  addTaskForm.classList.toggle("active");
  addTodo();
});

cancelTaskBtn.addEventListener("click", () => {
  addTaskBtn.classList.toggle("active");
  addTaskForm.classList.toggle("active");
  todoText.value = "";
  submitBtn.textContent = "Save Task";
});

// Done todo toggle
ul.addEventListener("change", (e) => {
  if (e.target.classList.contains("todo__status")) {
    toggleTodo(e.target);
  }
});

// Edit and Remove todo
ul.addEventListener("click", (e) => {
  const li = e.target.closest(".todolist__item");
  if (!li) return;

  const id = li.dataset.id;

  // Edit
  if (e.target.classList.contains("todo__edit")) {
    startEditTodo(id);
    addTaskBtn.classList.toggle("active");
    addTaskForm.classList.toggle("active");
  }

  // Remove
  if (e.target.classList.contains("todo__delete")) {
    removeTodo(id);
  }
});

// Filter
filter.addEventListener("change", () => {
  currentFilter = filter.value;
  saveFilter();
  render();
});

// Display Date
const today = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
}).format(today);

dateWrapper.textContent = formattedDate;

// Display Time
function updateTime() {
  const now = new Date();
  timeWrapper.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(
    now.getMinutes(),
  ).padStart(2, "0")}`;
}

updateTime();
setInterval(updateTime, 60_000);
