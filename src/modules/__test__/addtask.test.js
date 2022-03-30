/**
 * @jest-environment jsdom
 */

import {addToLi} from '../addtask'

describe('add to UL', () => {
  test('add', () => {
    document.body.innerHTML = '<ul id="todoList"></li>';

    const todoList = document.querySelector('#todoList')

    addToLi("name", 1, "trashImg", "taskList", todoList)
    const list = document.querySelectorAll('#todoList li');

     expect(list).toHaveLength(1);
  });
});
