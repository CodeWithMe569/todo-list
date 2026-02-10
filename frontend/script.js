const API_URL = "http://localhost:3000/todos";


// =============================
// READ ALL TODOS
// =============================
async function fetchTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  console.log(todos);
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
