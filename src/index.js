import './style.css';
import {taskList} from './modules/taskList.mjs';

const todoList = document.getElementById('todoList');

const newLi = (name, index, compleated) => {
  const element = document.createElement('li');
  element.classList = 'task'
  if (compleated) {
    element.innerHTML = `<input type="checkbox" name="${index}" checked><label for="${index}">${name}</label>`;
    return element;
  }
  element.innerHTML = `<input class="task" type="checkbox" name="${index}"><label for="${index}">${name}</label>`;
  return element;
};

taskList.forEach((item) => {
  todoList.appendChild(newLi(item.name, item.index, item.compleated));
});
