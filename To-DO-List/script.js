function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);

        taskInput.value = ""; // Clear input field after adding task
    } else {
        alert("Please enter a task!");
    }
}
