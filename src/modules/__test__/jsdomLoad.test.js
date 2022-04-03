const fs = require('fs');

beforeAll(() => {
  document.body.innerHTML = fs.readFileSync('src/jsdom/someTasks.html');
});

// JSDOM load test
describe('test DOM', () => {
  test('has a 4 list elements', () => {
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(4)
  });
});
