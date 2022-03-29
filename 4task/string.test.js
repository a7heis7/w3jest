const {repeatStr} = require('./string.js');

test('Returned string must be multypling n times', () => {
  expect(repeatStr(3 ,'Hello')).toBe('HelloHelloHello')
});
