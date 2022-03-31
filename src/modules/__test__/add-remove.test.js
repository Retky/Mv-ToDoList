/**
 * @jest-environment jsdom
 */

const fs = require('fs');

<<<<<<< HEAD
import {newTask, addToLi} from '../addTask.mjs';
import task from '../taskList.mjs';

// Clone the HTML to the JSDOM
beforeAll(() => {
  document.body.innerHTML = fs.readFileSync('dist/index.html');

  const todoList = document.getElementById('todoList');
});

// JSDOM loading
describe('JSDOM', () => {
  // Try to get first div in the clone HTML
  test('Is loading', () => {
    expect(document.querySelector('div')).not.toBe(null);
  });

  test('First div id = "todoDiv"', () => {
    expect(document.querySelector('div').id).toBe("todoDiv");
  });
});

// AddTask Test
describe('newTask', () => {
  // Add task item with name: dishes & index: 0
  const fnCall = newTask('dishes', 0);

  test('Return Object', () => {
    expect(typeof fnCall).toBe('object');
  });

  test('Object values correct', () => {
    expect.objectContaining({
      name: 'dishes',
      completed: false,
      index: 0
    });
  });
});

// AddToList
describe('addToLi', () => {
  test('Add a <li> element to DOM', () => {
    addToLi('feed cats', 0, 'trashImg', task.list, todoList);

    const liObject = todoList.querySelectorAll('li');
    expect(liObject).toHaveLength(1);
  });
});

// Listen
describe('listen', () => {

=======
// Clone the HTML to the JSDOM
beforeAll(() => {
  document.body.innerHTML = fs.readFileSync('dist/index.html');
});

// JSDOM loading
describe('JSDOM', () => {
  // Try to get first div in the clone HTML
  test('Is loading', () => {
    expect(document.querySelector('div')).not.toBe(null);
  });
  // Prove first div id is the correct one
  test('First div id = "todoDiv"', () => {
    expect(document.querySelector('div').id).toBe("todoDiv");
  });
>>>>>>> 42f70005d95211e2217d3dab0d8cb0df382edfec
});
