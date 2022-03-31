/**
 * @jest-environment jsdom
 */
import clear from '../clearComp.mjs';

beforeAll(() => {
  document.body.innerHTML = `<body data-new-gr-c-s-check-loaded="14.1055.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1055.0">
  <div id="todoDiv">
    <h1 class="task">Today's To Do</h1>
    <form id="add" class="task">
      <input id="addTask" type="text" name="addTask" value="" placeholder="Add to your list...">
      <button type="submit" id="enter"><img src="https://retky.github.io/Mv-ToDoList/dda6abaac264828e87ee.png" style="width: 100%;"></button>
    </form>
    <ul id="todoList">
    <li class="task"><input type="checkbox" name="0" checked=""><label for="0">Feed cats</label><div class="remove"><img src="https://retky.github.io/Mv-ToDoList/651605cb36c36cdda3f9.png" alt="remove"></div></li><li class="task"><input type="checkbox" name="1" checked=""><label for="1">Dishes</label><div class="remove"><img src="https://retky.github.io/Mv-ToDoList/651605cb36c36cdda3f9.png" alt="remove"></div></li><li class="task"><input type="checkbox" name="2"><label for="2">Laundry</label><div class="remove"><img src="https://retky.github.io/Mv-ToDoList/651605cb36c36cdda3f9.png" alt="remove"></div></li><li class="task"><input type="checkbox" name="3" checked=""><label for="3">Take a walk</label><div class="remove"><img src="https://retky.github.io/Mv-ToDoList/651605cb36c36cdda3f9.png" alt="remove"></div></li></ul>
    <div id="clear">
      <p>Clear all completed</p>
    </div>
  </div>
</body>`;
});

describe('clearCompleted', () => {
  test('Remove completed from DOM', () => {
    const element = document.querySelector('#clear');
    const taskList = [{ name: 'Feed cats', completed: true, index: 0 },
      { name: 'Dishes', completed: true, index: 1 },
      { name: 'Laundry', completed: false, index: 2 },
      { name: 'Take a walk', completed: true, index: 3 }];
    const todoList = document.querySelector('#todoList');

    clear(element, taskList, todoList);
    element.click();
    const list = todoList.querySelectorAll('li');

    expect(list).toHaveLength(1);
  });
});
