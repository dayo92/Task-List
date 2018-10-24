// Define UI Vars
const form = document.querySelector('#task-form');// target the form id 
const taskList = document.querySelector('.collection');//target collection class in html
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event 
  taskList.addEventListener('click', removeTask);
  //clear task event 
  clearBtn.addEventListener('click', clearTasks);
  //Filter task event 
  filter.addEventListener('keyup', filtterTasks);

}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  } else {

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class // if you want something to the right of the list item in materialize it has to have the secondary content class
  link.className = 'delete-item secondary-content';
  // create the delete icon in  html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul // add list item to unordered list 

  // console.log(li);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
  }
  
}

// Remove Task

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();

    }
  }
}

// Clear Task

function clearTasks() {



  // taskList.innerHTML = '';


  // Another way of clearing task

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

}

// Filter  through tasks

function filtterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    }else {
      task.style.display = 'none'
    }
  });
}

