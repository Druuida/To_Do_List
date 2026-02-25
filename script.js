const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');

  // ✅ Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check');
  checkbox.setAttribute('aria-label', 'Marcar tarefa como concluída');

  // ✅ Texto da tarefa
  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add('task-text');

  // ✅ Botão lixeira
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.classList.add('delete');
  deleteBtn.setAttribute('aria-label', 'Remover tarefa');

  // Marcar como concluída
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  // Remover tarefa
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Montar estrutura
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

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
