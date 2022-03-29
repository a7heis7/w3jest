const {removeChar} = require('./remove.js');

test('The returned string should be', () => {
  expect(removeChar('string')).toEqual('trin')
});
