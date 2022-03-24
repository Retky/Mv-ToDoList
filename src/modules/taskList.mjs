let taskList = [];

// Load from Local Storage
if (localStorage.taskList) {
  const from = JSON.parse(localStorage.taskList);
  taskList = from;
}

export {taskList}
