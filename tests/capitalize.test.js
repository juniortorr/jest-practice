import capitalize from '../helpers/capitalize.js';

test('capitalize first letter of string', () => {
  expect(capitalize('word')).toMatch(/Word/);
});
