function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
