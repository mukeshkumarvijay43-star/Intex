function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.textContent = task;

    // Display the task in the list
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}