// Implemented the Array.reduce poly fill

Array.prototype.myReduce = function(callback, intial, context) {
	let array = this
  let previous = intial
  for(let i=0; i<array.length; i++) {
  	if (array.indexOf(array[i]) > -1) {
    	 previous = previous !== undefined ? callback.call(context, previous, array[i], i, array) : array[i];
    }
  }
  return previous
}




const array1 = [1, 2,5,6,7, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.myReduce(
  (previousValue, currentValue) => previousValue * currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
