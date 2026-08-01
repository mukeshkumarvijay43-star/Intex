function updateTaskCount() {
    let total = document.querySelectorAll("#taskList li").length;
    document.getElementById("taskCount").textContent = total;
}