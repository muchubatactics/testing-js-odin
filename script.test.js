const payload = require('./script.js');

test('capitalize: one word', () => {
  expect(payload.capitalize('john')).toBe('John');
});

test('capitalize: two words', () => {
  expect(payload.capitalize('john doe')).toBe('John Doe');
});

test('capitalize: three words', () => {
  expect(payload.capitalize('john doe max')).toBe('John Doe Max');
});

test('reverse string: one word', () => {
  expect(payload.reverseString('john')).toBe('nhoj');
});

test('reverse string: two words', () => {
  expect(payload.reverseString('john doe')).toBe('eod nhoj');
});

test('reverse string: three words', () => {
  expect(payload.reverseString('john doe max')).toBe('xam eod nhoj');
});

test('calculator: add', () => {
  expect(payload.Calculator.add(1, 2)).toBe(3);
});

test('calculator: subtract', () => {
  expect(payload.Calculator.subtract(1, 2)).toBe(-1);
});

test('Calculator: multiply', () => {
  expect(payload.Calculator.multiply(1, 2)).toBe(2);
});

test('Calculator: divide', () => {
  expect(payload.Calculator.divide(1, 2)).toBeCloseTo(0.5);
});