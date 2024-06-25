// Function to add tasks to end of list
function addToList(task) {
    const newLI = document.createElement('li');
    newLI.innerHTML = task;
    const unList = document.querySelector('ul');
    unList.appendChild(newLI); 
}

// Referencing the DOM
const addTaskForm = document.getElementById("add-task-form");
const taskList = document.getElementById('todo-list');

// Add to to-do list from input form 
addTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.getElementById("todo-input").value;
    addToList(newTask);
    addTaskForm.reset();
});


// Remove task when clicked, add strike thru and remove after 1 sec
taskList.addEventListener('click', function(event) {
    setTimeout(function() {
      removeTask(event);
    }, 1000);
    if (event.target.tagName === 'LI'){
        event.target.style = "text-decoration:line-through; list-style-type:none"
    };
  });

function removeTask(event) {
  if (event.target.tagName === 'LI') { 
    taskList.removeChild(event.target);   
  }
};


