import './style.css';
import enterImg from './img/enter.png';
import trashImg from './img/trash.png';
import {taskList} from './modules/taskList.mjs';
import listen  from './modules/addTask.mjs';
import newLi from './modules/taskBuild.mjs'

const todoList = document.getElementById('todoList');

// Enter Button
const addBtn = document.getElementById('enter')
const enter = new Image();
enter.src = enterImg;
enter.style.width = '100%';
addBtn.appendChild(enter)

// Display list
taskList.forEach((item) => {
  todoList.appendChild(newLi(item.name, item.index, item.compleated, trashImg));
});

listen(taskList, trashImg)
