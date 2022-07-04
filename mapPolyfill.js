// Implemented the Array.map polyfill

Array.prototype.myMap = function (callback, context) {
  const array = this;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) > -1) {
      result[i] = callback.call(context, array[i], i);
    }
  }
  return result;
};
