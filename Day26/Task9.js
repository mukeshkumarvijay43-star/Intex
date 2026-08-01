function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Get current date and time
    let date = new Date().toLocaleString();

    // Create task
    let li = document.createElement("li");
    li.innerHTML = `
        <strong>${task}</strong><br>
        <small>Added: ${date}</small>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}