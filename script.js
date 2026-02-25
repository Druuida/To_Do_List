const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${text}
    <button class="delete">Remover</button>
  `;

  li.addEventListener('click', (e) => {
    if (!e.target.classList.contains('delete')) {
      li.classList.toggle('completed');
    }
  });

  const deleteBtn = li.querySelector('.delete');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  todoList.appendChild(li);
  todoInput.value = '';
  todoInput.focus();
});

const themeToggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  if (themeToggle) themeToggle.textContent = '☀️';
} else {
  if (themeToggle) themeToggle.textContent = '🌙';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
