function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please write something!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'task-item';

    // ✨ Al hacer click en la tarea, se tachará
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    document.getElementById('taskList').appendChild(li);

    setTimeout(() => {
        li.classList.add('show');
    }, 10);

    taskInput.value = '';
}
