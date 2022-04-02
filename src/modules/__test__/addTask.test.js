import {listen, addToLi, newTask} from '../addtask.mjs'

const fs = require('fs');

beforeAll(() => {
  document.body.innerHTML = fs.readFileSync('src/jsdom/someTasks.html');
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
