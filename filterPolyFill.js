// Implemented the Array.filter polyfill
Array.prototype.myNewFilter = function (callback, context) {
  let array = this;
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.call(context, array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};
