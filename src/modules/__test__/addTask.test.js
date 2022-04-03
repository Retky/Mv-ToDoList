import {listen, addToLi, newTask} from '../addtask.mjs'

const fs = require('fs');

beforeAll(() => {
  document.body.innerHTML = fs.readFileSync('src/jsdom/empty.html');
  const todoList = document.querySelector('#todoList')
});

describe('newTask|create a new object', () => {
  const task = newTask('dishes', 0);

  test('object contain name, completed & index', () => {
    expect.objectContaining({
      name: expect.anything(),
      completed: expect.anything(),
      index: expect.anything()
    });
  });

});

describe('addToLi|', () => {
  test('add to DOM list', () => {
    const taskList = [];
    addToLi('dishes', 0, './trashImg.png', taskList, todoList);
    const liElements = todoList.querySelectorAll('li')
    expect(liElements).toHaveLength(1)
  });
});
