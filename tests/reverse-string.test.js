import reverseString from '../helpers/reverse-string';

test('reverse given string', () => {
  expect(reverseString('word')).toMatch(/drow/);
});
