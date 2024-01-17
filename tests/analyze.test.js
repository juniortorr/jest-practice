import { getAverage, getMin, getMax, getLength, analyzeArray } from '../helpers/analyze';

test('return average key value pair', () => {
  const arr = [5, 10, 15];
  const object = {};
  expect(getAverage(arr, object)).toEqual({ average: 10 });
});

test('return min', () => {
  const arr = [5, 10, 15];
  const obj = {};
  expect(getMin(arr, obj)).toEqual({ min: 5 });
});

test('return max', () => {
  const arr = [5, 10, 15];
  const obj = {};
  expect(getMax(arr, obj)).toEqual({ max: 15 });
});

test('return length', () => {
  const arr = [5, 10, 15];
  const obj = {};
  expect(getLength(arr, obj)).toEqual({ length: 3 });
});

test('return analysis', () => {
  const arr = [5, 10, 15];
  expect(analyzeArray(arr)).toEqual({
    average: 10,
    min: 5,
    max: 15,
    length: 3,
  });
});
