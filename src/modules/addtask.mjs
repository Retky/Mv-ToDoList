const addDiv = document.getElementById('add')
const input = document.getElementById('addTask')

// CreateTask
const newTask = (name, index) => {
  const task = {

    name: name,
    compleated: false,
    index: index
  };
  return  task
}

// Add to the list
const addToLi = (name, index) => {
  const element = document.createElement('li');
  element.classList = 'task'

  element.innerHTML = `<input class="task" type="checkbox" name="${index}"><label for="${index}">${name}</label>`;
  todoList.appendChild(element);
};

// Add task to the list and display
const listen = (taskList) => {
  addDiv.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
      taskList.push(newTask(input.value, taskList.length))

      addToLi(input.value, taskList.length)

      input.value = '';
    }
  })
}

export default listen;
