const taskList = document.querySelector('.tasks');
const form = document.querySelector('.main-form')

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('form1');
    addTasks(inputField.value);
    form.reset();
}

function addTasks(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type','checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for',description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}

