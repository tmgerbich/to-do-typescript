"use strict";
// Function to add tasks to the end of the list
function addToList(task) {
    const newLI = document.createElement('li');
    newLI.innerHTML = task;
    const unList = document.querySelector('ul');
    if (unList) {
        unList.appendChild(newLI);
    }
}
// Referencing the DOM elements
const addTaskForm = document.getElementById("add-task-form");
const taskList = document.getElementById('todo-list');
// Add to to-do list from input form
addTaskForm?.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTaskInput = document.getElementById("todo-input");
    const newTask = newTaskInput.value;
    addToList(newTask);
    addTaskForm.reset();
});
// Remove task when clicked, add strikethrough and remove after 1 second
taskList?.addEventListener('click', function (event) {
    const target = event.target;
    if (target.tagName === 'LI') {
        target.style.textDecoration = "line-through";
        target.style.listStyleType = "none";
        setTimeout(function () {
            removeTask(target);
        }, 1000);
    }
});
function removeTask(element) {
    if (element.tagName === 'LI') {
        taskList.removeChild(element);
    }
}
