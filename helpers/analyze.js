const getAverage = (arr, obj) => {
  const initialValue = 0;
  const sum = arr.reduce((accum, current) => {
    return accum + current;
  }, initialValue);
  const avg = sum / arr.length;
  obj.average = avg;
  return obj;
};

const getMin = (arr, obj) => {
  const min = arr.reduce((a, b) => {
    if (a < b) return a;
    else return b;
  });
  obj.min = min;
  return obj;
};

const getMax = (arr, obj) => {
  const max = arr.reduce((a, b) => {
    if (a < b) return b;
    else return a;
  });
  obj.max = max;
  return obj;
};

export { getAverage, getMin, getMax };
