/**
 * @jest-environment jsdom
 */

const fs = require('fs');

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
});
