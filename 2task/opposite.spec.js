const {number} = require('./opposite.js');

test('The number must to be opposite', () => {
  expect(number(-1)).toBe(1)
});
