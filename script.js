// Function to add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new task item
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskValue}</span>
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    `;

    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Function to mark task as completed
function toggleTask(task) {
    task.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(button) {
    button.parentElement.remove();
}
