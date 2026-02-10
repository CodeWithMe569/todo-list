const API_URL = "http://localhost:3000/todos";

const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");

const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

let selectedId = null;


// =============================
// READ ALL TODOS
// =============================
async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  console.log(todos);

  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.className =
      "flex justify-between items-center px-3 py-2 border-b border-slate-700";

    li.innerHTML = `
      <span class="text-white ${todo.completed ? "line-through text-gray-400" : ""}">
        ${todo.text}
      </span>
        <div class="flex gap-2">
          <button data-id="${todo._id}" class="toggle bg-green-600 px-2 rounded">
            ✔
          </button>
          <button data-id="${todo._id}" class="delete bg-yellow-600 px-2 rounded">
            Delete
          </button>
        </div>
    `;

    list.appendChild(li);
  });
}


// =============================
// CREATE TODO
// =============================
async function addTodo(text) {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  fetchTodos();
}


// =============================
// TOGGLE COMPLETE
// =============================
async function toggleTodo(id) {
  await fetch(`${API_URL}/${id}/toggle`, {
    method: "PATCH"
  });

  fetchTodos();
}


// =============================
// DELETE ONE TODO
// =============================
async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchTodos();
}


// =============================
// DELETE COMPLETED TODOS
// =============================
async function clearCompleted() {
  await fetch(`${API_URL}/completed/all`, {
    method: "DELETE"
  });

  fetchTodos();
}



// =============================
// UI EVENTS
// =============================

// Add button
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  addTodo(text);
  input.value = "";
});

// (No global delete button) per-item delete handled via list click

// Clear completed
clearBtn.addEventListener("click", () => {
  clearCompleted();
});

// Toggle / Select via list
list.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn || !list.contains(btn)) return;

  const id = btn.dataset.id;
  if (!id) return;

  if (btn.classList.contains("toggle")) {
    toggleTodo(id);
  }

  if (btn.classList.contains("delete")) {
    deleteTodo(id);
  }
});


// Initial load
fetchTodos();
