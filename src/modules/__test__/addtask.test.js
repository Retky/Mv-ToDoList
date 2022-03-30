/**
 * @jest-environment jsdom
 */

import {listen, addToLi, newTask} from '../addtask'

describe('addToLi Function', () => {
  test('add Li element', () => {
    document.body.innerHTML = '<ul id="todoList"></li>';

    const todoList = document.querySelector('#todoList')

    addToLi("name", 1, "trashImg", "taskList", todoList)
    const list = document.querySelectorAll('#todoList li');
     expect(list).toHaveLength(1);
  });
});

describe('listen Function', () => {
  test('Click add Task', () => {
    document.body.innerHTML = '<form id="add" class="task"><input id="addTask" type="text" name="addTask" value="Feed dogs" placeholder="Add to your list..."><button type="submit" id="enter"></button></form><ul id="todoList"></li>';

    const todoList = document.querySelector('#todoList');
    const taskList = [];
    const addDiv = document.getElementById('add');
    const input = document.getElementById('addTask');
    const button = document.querySelector('#enter');

    listen(taskList, "trashImg", todoList, addDiv, input)
    button.click()

    const list = document.querySelectorAll('#todoList li');
     expect(list).toHaveLength(1);
  });
});
