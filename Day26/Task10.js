window.onload = function () {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
};
function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}
document.getElementById("taskList").appendChild(li);
saveTasks();
deleteBtn.onclick = function (event) {
    event.stopPropagation();
    li.remove();
    saveTasks();
};
let tasks = [
    {
        text: "Learn JavaScript",
        completed: false,
        date: "2026-08-01"
    }
];

// Save
localStorage.setItem("tasks", JSON.stringify(tasks));

// Load
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];