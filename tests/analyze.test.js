import { getAverage } from '../helpers/analyze';

test('return average key value pair', () => {
  const arr = [5, 10, 15];
  const object = {};
  expect(getAverage(arr, object)).toEqual({ average: 10 });
});
