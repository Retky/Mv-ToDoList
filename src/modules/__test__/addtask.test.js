import testAddToLi from '../addtask.mjs'
 

const testAddToLi = (name, index, trashImg, taskList, todoList) => {
  const element = document.createElement('li');
  element.classList = 'task';
  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  todoList.appendChild(element);
  remove(element, index, taskList, todoList);
  editTask(element, taskList);
  checkBox(element, index, taskList);
};

// Create testcase to add UL to mock DOM
const testAddToLi = (name, index, trashImg, taskList, todoList) => {
  const element = document.createElement('li');
  element.classList = 'task';
  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  todoList.appendChild(element);
  remove(element, index, taskList, todoList);
  editTask(element, taskList);
  checkBox(element, index, taskList);
};

// Create testcase to add UL to mock DOM
const testAddToLi = (name, index, trashImg, taskList, todoList) => {
  const element = document.createElement('li');
  element.classList = 'task';
  element.innerHTML = `<input type="checkbox" name="${index}"><label for="${index}">${name}</label><div class="remove"><img src=${trashImg} alt="remove"/>`;
  todoList.appendChild(element);
  remove(element, index, taskList, todoList);
  editTask(element, taskList);
  checkBox(element, index, taskList);
};

// Create testcase to add UL to mock DOM
const testAddToLi = (name, index