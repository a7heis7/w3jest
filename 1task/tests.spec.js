const {sumOfPositives} = require('./script.js');

test('sumOfPositives should return sum of positive numbers of array', () => {
  expect(sumOfPositives([1,2,3,4,5])).toBe(15)
});


