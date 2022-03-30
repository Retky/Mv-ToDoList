/**
 * @jest-environment jsdom
 */

import { listen, addToLi } from '../addtask.mjs';
import remove from '../remove.mjs';

// Add Test

describe('addToLi Function', () => {
  test('add Li element', () => {
    document.body.innerHTML = '<ul id="todoList"></ul>';

    const todoList = document.querySelector('#todoList');

    addToLi('name', 1, 'trashImg', 'taskList', todoList);

    const list = document.querySelectorAll('#todoList li');
    expect(list).toHaveLength(1);
  });
});

describe('listen Function', () => {
  test('Click add Task', () => {
    document.body.innerHTML = `<form id="add" class="task">
    <input id="addTask" type="text" name="addTask" value="Feed dogs" placeholder="Add to your list...">
    <button type="submit" id="enter"></button>
    </form>
    <ul id="todoList"></ul>`;

    const todoList = document.querySelector('#todoList');
    const taskList = [];
    const button = document.querySelector('#enter');

    listen(taskList, 'trashImg', todoList);
    button.click();

    const list = document.querySelectorAll('#todoList li');
    expect(list).toHaveLength(1);
  });
});

// Remove Test

describe('remove Function', () => {
  test('remove element', () => {
    document.body.innerHTML = `<ul id="todoList">
    <li class="task">
    <input type="checkbox" name="0">
    <label for="0">Feed cats</label>
    <div class="remove"><img src="img"></div>
    </li>
    </ul>`;

    const taskList = [{ name: 'Feed cats', index: 0, done: false }];
    const item = document.querySelector('li');
    const button = document.querySelector('.remove');
    const todoList = document.querySelector('#todoList');

    remove(item, 0, taskList, todoList);
    button.click();

    const list = document.querySelectorAll('#todoList li');
    expect(list).toHaveLength(0);
  });
});
