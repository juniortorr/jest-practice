import { add, subtract, multiply, divide } from '../helpers/calculator.js';

test('a + b', () => {
  expect(add(5, 5)).toBe(10);
});

test('a - b', () => {
  expect(subtract(5, 5)).toBe(0);
});

test('a * b', () => {
  expect(multiply(5, 5)).toBe(25);
});

test('a / b', () => {
  expect(divide(5, 5)).toBe(1);
});
