// Function to add tasks to the end of the list
function addToList(task: string): void {
  const newLI: HTMLLIElement = document.createElement('li');
  newLI.innerHTML = task;
  const unList = document.querySelector('ul') as HTMLUListElement;
  if (unList) {
      unList.appendChild(newLI);
  }
}

// Referencing the DOM elements
const addTaskForm = document.getElementById("add-task-form") as HTMLFormElement;
const taskList = document.getElementById('todo-list') as HTMLUListElement;

// Add to to-do list from input form
addTaskForm?.addEventListener("submit", function(event: SubmitEvent) {
  event.preventDefault();
  const newTaskInput = document.getElementById("todo-input") as HTMLInputElement;
  const newTask: string = newTaskInput.value;
  addToList(newTask);
  addTaskForm.reset();
});

// Remove task when clicked, add strikethrough and remove after 1 second
taskList?.addEventListener('click', function(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (target.tagName === 'LI') {
      target.style.textDecoration = "line-through";
      target.style.listStyleType = "none";
      setTimeout(function() {
          removeTask(target);
      }, 1000);
  }
});

function removeTask(element: HTMLElement): void {
  if (element.tagName === 'LI') {
      taskList.removeChild(element);
  }
}
