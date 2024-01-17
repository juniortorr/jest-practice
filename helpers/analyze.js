const getAverage = (arr, obj) => {
  const initialValue = 0;
  const sum = arr.reduce((accum, current) => {
    return accum + current;
  }, initialValue);
  const avg = sum / arr.length;
  obj.average = avg;
  return obj;
};

export { getAverage };
