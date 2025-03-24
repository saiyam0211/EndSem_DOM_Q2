const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addNewTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addNewTask();
    }
});

function addNewTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        taskItem.querySelector('.delete-btn').onclick = () => taskItem.remove();
        
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
} 