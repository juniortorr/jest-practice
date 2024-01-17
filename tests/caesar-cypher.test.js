import { alphabet, caesarCypher } from '../helpers/caesar-cypher';

test('return string of letters shifted', () => {
  expect(caesarCypher('abc', 1)).toMatch(/bcd/);
});

test('return string of letters with negative shift', () => {
  expect(caesarCypher('abc', -1)).toMatch(/zab/);
});

test('handle commas', () => {
  expect(caesarCypher('a, b, c', 1)).toMatch(/bcd/);
});

test('handle period', () => {
  expect(caesarCypher('a. b. c', 1)).toMatch(/bcd/);
});

test('handle different cases', () => {
  expect(caesarCypher('AbC', 1)).toMatch(/bcd/);
});
