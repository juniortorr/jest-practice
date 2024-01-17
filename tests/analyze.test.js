test('return average key value pair', () => {
  const arr = [5, 10, 15];
  expect(getAverage(arr)).toEqual({ average: 4 });
});
