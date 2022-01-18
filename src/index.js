document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

addTask()
function addTask() {
  const taskInput = document.querySelector('#create-task-form');
  taskInput.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = event.target['new-task-description'].value;
    const newTask = document.createElement('li');
    newTask.innerText = input;
    document.getElementById('tasks').appendChild(newTask)
    event.target.reset()
  })
}

// As a user, I should be able to type a task into the input field.

// As a user, I should be able to click some form of a submit button.

// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
