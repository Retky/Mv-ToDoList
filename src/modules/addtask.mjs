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
const addToLi = (name, index, trashImg) => {
  const element = document.createElement('li');
  element.classList = 'task'

  element.innerHTML = `<input class="task" type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  todoList.appendChild(element);
};

// Add task to the list and display
const listen = (taskList, trashImg) => {
  addDiv.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
      taskList.push(newTask(input.value, taskList.length))

      addToLi(input.value, taskList.length, trashImg)

      input.value = '';
      console.log(taskList);
    }
  })
}

export default listen;
