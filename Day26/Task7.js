let li = document.createElement("li");
li.textContent = task;

// Strike or unstrike the task when clicked
li.onclick = function () {
    li.classList.toggle("completed");
};