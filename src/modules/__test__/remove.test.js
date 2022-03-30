/**
 * @jest-environment jsdom
 */

import remove from '../remove.mjs';

describe('remove Function', () => {
  test('remove element', () => {
    document.body.innerHTML = '<ul id="todoList"><li class="task"><input type="checkbox" name="0"><label for="0">Feed cats</label><div class="remove"><img src="img"></div></li></ul>';
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
