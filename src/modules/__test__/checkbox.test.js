/**
 * @jest-environment jsdom
 */
import checkBox from '../checkbox.mjs';

beforeAll(() => {
  document.body.innerHTML = `<body data-new-gr-c-s-check-loaded="14.1055.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1055.0">
    <div id="todoDiv">
      <h1 class="task">Today's To Do</h1>
      <form id="add" class="task">
        <input id="addTask" type="text" name="addTask" value="" placeholder="Add to your list...">
        <button type="submit" id="enter"><img src="https://retky.github.io/Mv-ToDoList/dda6abaac264828e87ee.png" style="width: 100%;"></button>
      </form>
      <ul id="todoList">
      <li class="task"><input type="checkbox" name="0"><label for="0" contenteditable="false">Feed dogs</label><div class="remove"><img src="https://retky.github.io/Mv-ToDoList/651605cb36c36cdda3f9.png" alt="remove"></div></li></ul>
      <div id="clear">
        <p>Clear all completed</p>
      </div>
    </div>
</body>`;
});

describe('CheckBox', () => {
  test('update completed', () => {
    const taskList = [{ name: 'Feed dogs', completed: false, index: 0 }];
    const element = document.querySelector('li');
    const check = element.querySelector('input');

    checkBox(element, 0, taskList);
    check.click();

    expect(taskList[0].completed).toBeTruthy();
  });

  test('update uncompleted', () => {
    const taskList = [{ name: 'Feed dogs', completed: true, index: 0 }];
    const element = document.querySelector('li');
    const check = element.querySelector('input');

    checkBox(element, 0, taskList);
    check.click();

    expect(taskList[0].completed).toBeFalsy();
  });
});
